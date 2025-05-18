import { ANALYTICS_TYPE, CONTENT_TYPE } from './analytics.interface';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';

const STATES = ['Lagos', 'Abuja', 'Enugu', 'Kano', 'Oyo', 'Delta', 'Kaduna', 'Rivers', 'Ogun'];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomFingerprint(index: number): string {
  return `user-${String(index).padStart(3, '0')}`;
}

export async function generateDummyData(count: number) {
  const data: CreateAnalyticsDto[] = [];

  for (let i = 0; i < count; i++) {
    const entry: CreateAnalyticsDto = {
      fingerprint: generateRandomFingerprint(i),
      state: getRandomItem(STATES),
      type: getRandomItem([ANALYTICS_TYPE.CLICK, ANALYTICS_TYPE.VISIT]),
      content: getRandomItem([CONTENT_TYPE.PROJECT, CONTENT_TYPE.POST]),
    };

    data.push(entry);
  }

  return data;
}
