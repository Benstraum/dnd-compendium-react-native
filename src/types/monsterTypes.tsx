export type MonsterSpeed = {
  burrow: string
  climb: string
  fly: string
  hover: boolean
  swim: string
  walk: string
  }

export type MonsterSpecial_abilities = {
  desc: string
  name: string
  }

export type MonsterSenses = {
  blindsight: string
  darkvision: string
  passive_perception: number
  tremorsense: string
  truesight: string
  }

export type MonsterReactions = {
  desc: string
  name: string
  }

export type MonsterProficiencies = {
  proficiency: MonsterProficienciesProficiency
  value: number
  }

export type MonsterProficienciesProficiency = {
  index: string
  name: string
  url: string
  }

export type MonsterLegendary_actions = {
  attack_bonus: number
  desc: string
  name: string
  }

export type MonsterForms = {
  index: string
  name: string
  url: string
  }

export type MonsterCondition_immunities = {
  index: string
  name: string
  url: string
  }

export type MonsterActions = {
  attack_bonus: number
  damage: [MonsterActionsDamage]
  desc: string
  name: string
  }

export type MonsterActionsDamage = {
  damage_dice: string
  damage_type: MonsterActionsDamageDamage_type
  }

export type MonsterActionsDamageDamage_type = {
  index: string
  name: string
  url: string
  }

export type Monster = {
  _id: string
  actions: [MonsterActions]
  alignment: string
  armor_class: number
  challenge_rating: number
  charisma: number
  condition_immunities: [MonsterCondition_immunities]
  constitution: number
  damage_immunities: [string]
  damage_resistances: [string]
  damage_vulnerabilities: [string]
  dexterity: number
  forms: [MonsterForms]
  hit_dice: string
  hit_points: number
  index: string
  intelligence: number
  languages: string
  legendary_actions: [MonsterLegendary_actions]
  name: string
  proficiencies: [MonsterProficiencies]
  reactions: [MonsterReactions]
  senses: MonsterSenses
  size: string
  special_abilities: [MonsterSpecial_abilities]
  speed: MonsterSpeed
  strength: number
  subtype: string
  type: string
  url: string
  wisdom: number
  xp: number
  }