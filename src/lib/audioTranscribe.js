import { client } from '@gradio/client';

export const audioTranscribe = async audioFile => {
  try {
    if (!audioFile || audioFile.size === 0) {
      return { error: 'No audio file provided' };
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: audioFile.type });

    const app = await client('HiTZ/Demo_Basque_ASR');

    const { data } = await app.predict('/predict', [blob]);

    return data[0];
  } catch (err) {
    console.log(err);
  }
};
