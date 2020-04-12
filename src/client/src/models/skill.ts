interface Skill {
  name: string;
  size: number;
}

class SingleSkill implements Skill {
  name = "";
  size = 0;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

class MultiSkill implements Skill {
  name = "";
  private skills_: SingleSkill[] = [];

  constructor(skills: SingleSkill[]) {
    this.skills_ = skills;
  }

  get skills() {
    return this.skills_;
  }

  get size() {
    return 4;
  }
}

class SingleAttackSkill extends SingleSkill {
  constructor() {
    super("Attack", 1);
  }
}

class MultipleAttackSkill extends MultiSkill {
  constructor() {
    super([new SingleAttackSkill(), new SingleAttackSkill()]);
  }
}
