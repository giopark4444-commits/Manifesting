/** Manifesting — starter utilities for daily affirmations. */

export interface Affirmation {
  id: number;
  text: string;
}

/** Add an affirmation with a sequential id (pure: returns a new array). */
export function addAffirmation(list: Affirmation[], text: string): Affirmation[] {
  const clean = text.trim();
  if (!clean) throw new Error("Affirmation text cannot be empty");
  const nextId = list.reduce((max, a) => Math.max(max, a.id), 0) + 1;
  return [...list, { id: nextId, text: clean }];
}

/**
 * Pick a deterministic "affirmation of the day" so the same date always
 * yields the same one (reproducible — no randomness).
 */
export function affirmationOfTheDay(
  list: Affirmation[],
  date = new Date(),
): Affirmation | null {
  if (list.length === 0) return null;
  const dayNumber = Math.floor(date.getTime() / 86_400_000);
  return list[dayNumber % list.length];
}
