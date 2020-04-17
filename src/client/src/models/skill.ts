class Skill {
  id = -1;
  level = -1;
  skill = -1;
}

class Decoration {
  id = -1;
  rarity = -1;
  slot = -1;
  skills: Skill[] = [];
}