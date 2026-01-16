import { audioTranscribe } from '@/lib/audioTranscribe';
import { detectCommand } from '@/lib/detectCommand';
import { getTranslation } from '@/lib/utils';
import useStore from '@/store/store';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function VoiceTrigger() {
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timeoutRef = useRef(null);
  const store = useStore();
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (status === 'success' || status === 'error') {
      timer = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const executeCommand = command => {
    switch (command) {
      case 'POWER_ON':
        store.setIsLightOn(true);
        break;
      case 'POWER_OFF':
        store.setIsLightOn(false);
        break;
      case 'BRIGHTNESS_UP':
        store.setLampIntensity(store.lampIntensity + 100);
        break;
      case 'BRIGHTNESS_DOWN':
        store.setLampIntensity(store.lampIntensity - 100);
        break;
      case 'MODEL_CHANGE':
        store.setStand(store.stand === 'stand1' ? 'stand2' : 'stand1');
        break;
      case 'COLOR_BLUE':
        store.setColor('#87cefb');
        store.setLampColor('#87cefb');
        break;
      case 'COLOR_GREEN':
        store.setColor('#6f6');
        store.setLampColor('#6f6');
        break;
      case 'COLOR_RED':
        store.setColor('#e6293c');
        store.setLampColor('#e6293c');
        break;
      case 'CHANGE_MATERIAL_TO_BEECH':
        store.setMaterial('beech');
        break;
      case 'CHANGE_MATERIAL_TO_OAK':
        store.setMaterial('oak');
        break;
      case 'CHANGE_MATERIAL_TO_WALNUT':
        store.setMaterial('walnut');
        break;
      default:
        break;
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        setStatus('processing');
        setMessage(getTranslation(store.language, 'voiceCommand.thinking'));

        try {
          const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
          const audioFile = new File([audioBlob], 'voice-command.webm', {
            type: 'audio/webm',
          });

          const transcript = await audioTranscribe(audioFile);
          const command = detectCommand(transcript);

          if (command === 'UNKNOWN') {
            setStatus('error');
            setMessage(getTranslation(store.language, 'voiceCommand.error'));
          } else {
            executeCommand(command);
            setStatus('success');
            setMessage(`✓ ${command.replace(/_/g, ' ').toLowerCase()}`);
          }
        } catch (err) {
          console.error(err);
          setStatus('error');
          setMessage(
            getTranslation(store.language, 'voiceCommand.connectionFailed')
          );
        }
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setStatus('listening');
      setMessage(getTranslation(store.language, 'voiceCommand.listening'));

      timeoutRef.current = setTimeout(() => {
        if (mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        }
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage(
        getTranslation(store.language, 'voiceCommand.microphoneDenied')
      );
    }
  };

  const isRecording = status === 'listening';
  const isProcessing = status === 'processing';

  const getStatusColor = () => {
    switch (status) {
      case 'listening':
        return 'ring-red-500 border-red-500 shadow-red-500/50';
      case 'processing':
        return 'ring-blue-400 border-blue-400 shadow-blue-400/50';
      case 'success':
        return 'ring-emerald-400 border-emerald-400 shadow-emerald-400/50';
      case 'error':
        return 'ring-rose-500 border-rose-500 shadow-rose-500/50';
      default:
        return 'ring-white/20 border-white/10 hover:ring-white/40 shadow-black/20';
    }
  };

  const lang = searchParams.get('lang');
  if (lang != null && lang != 'eu') return null;

  return (
    <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex flex-col items-center">
      <div
        className={`
        absolute top-1/2 right-full -translate-y-1/2
        transition-all duration-300 ease-out origin-bottom
        ${message ? 'opacity-100 scale-100 -translate-x-2' : 'opacity-0 scale-90 translate-x-1/2 pointer-events-none'}
      `}
      >
        <div
          className={`
          px-4 py-2 rounded-2xl text-sm font-medium backdrop-blur-md shadow-lg border border-white/10 whitespace-nowrap capitalize
          ${status === 'error' ? 'bg-rose-500/90 text-white' : status === 'success' ? 'bg-emerald-500/90 text-white' : 'bg-slate-900/80 text-slate-100'}
        `}
        >
          {message}
        </div>
      </div>

      {/* Main Trigger Button */}
      <div className="relative group">
        {/* Ripple Effect */}
        {isRecording && (
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75 duration-1000" />
        )}

        {/* Glow Effect */}
        {isProcessing && (
          <span className="absolute inset-0 rounded-full bg-blue-400 blur-md animate-pulse opacity-60" />
        )}

        <button
          onClick={startRecording}
          disabled={isRecording || isProcessing}
          className={`
            relative flex items-center justify-center w-18 h-18 rounded-full 
            transition-all duration-300 overflow-hidden
            bg-slate-950 backdrop-blur-sm border-2
            ${getStatusColor()}
            ${status === 'idle' ? 'hover:scale-105 active:scale-95' : 'scale-100'}
            shadow-xl
          `}
        >
          <img
            src="/assets/audio-trigger.webp"
            alt="Voice Trigger"
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isProcessing ? 'opacity-50 animate-pulse' : 'opacity-90 hover:opacity-100'}
            `}
          />
        </button>
      </div>
    </div>
  );
}
