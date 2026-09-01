export type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

export function parseWeddingDateTime(dateTime: string): Date | null {
  if (!dateTime.trim()) return null;
  const parsed = new Date(dateTime);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function getCountdown(target: Date, now = new Date()): CountdownValues {
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, complete: false };
}

export function padCountdownUnit(value: number): string {
  return String(value).padStart(2, "0");
}
