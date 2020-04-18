export interface Skill {
  id: number;
  level: number;
  skill: number;
}

export interface Decoration {
  id: number;
  rarity: number;
  slot: number;
  skills: Skill[];
}