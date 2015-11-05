var AdeptaSororitas = {
    Skills : "Athletics, Charm or Intimidate, Common Lore (Adepta Sororitas), Linguistics (High Gothic), Medicae or Parry",
	Talents : "Weapon Training (Flame or Las, Chain",
    Trait : "none",
	Equipment : "Hand flamer or laspistol, chainblade, armoured bodyglove, chrono, dataslate, stablight, micro-bead",
    BackkgroundBonus : "Incorruptible Devotion",
    Aptitude : ["Ofence", "Social"] //or
};

var AdeptusAdministratum = {
    Skills : "Commerce or Medicae, Common Lore (Adeptus Administratum), Linguistics (High Gothic), Logic, Scholastic Lore (Pick One)",
	Talents : "Weapon Training (Las orSolid Projectile)",
    Trait : "none",
	Equipment : "Laspistol orstub automatic, Imperial robes, autoquill, chrono, dataslate, medi-kit",
    BackkgroundBonus : "Master of Paperwork",
    Aptitude : ["Knowledge", "Social"] //or
};

var AdeptusArbites = {
    Skills : "Awareness, Common Lore (Adeptus Arbites, Underworld), Inquiry orInterrogation, Intimidate, Scrutiny",
	Talents : "Weapon Training (Shock orSolid Projectile)",
    Trait : "none",
	Equipment : "Shotgun or shock maul, Enforcer light carapace armour orcarapace chestplate, 3 doses of stimm, manacles, 12 lho sticks",
    BackkgroundBonus : "The Face of the Law",
    Aptitude : ["Offence", "Defence"] //or
};

var AdeptusAstraTelepathica = {
    Skills : "Awareness, Common Lore (Adeptus Astra Telepathica), Deceive orInterrogation, Forbidden Lore (the Warp), Psyniscience orScrutiny",
	Talents : "Weapon Training (Las, Low-Tech)",
    Trait : "none",
	Equipment : "Laspistol, staff orwhip, light flak cloak orflak vest, micro-bead or psy focus",
    BackkgroundBonus : "The Constant Threat",
    Aptitude : ["Defence", "Psyker"] //or
};

var AdeptusMechanicus = {
    Skills : "Awareness orOperate (Pick One), Common Lore (Adeptus Mechanicus), Logic, Security, Tech-Use",
	Talents : "Mechadendrite Use (Utility), Weapon Training (Solid Projectile)",
    Trait : "Mechanicus Implants",
	Equipment : "Autogun orhand cannon, monotask servo-skull (utility) oroptical mechadendrite, Imperial robes, 2 vials of sacred unguents",
    BackkgroundBonus : "Replace the Weak Flesh",
    Aptitude : ["Knowledge", "Tech"] //or
};

var AdeptusMinistorum = {
    Skills : "Charm, Command, Common Lore (Adeptus Ministorum), Inquiry orScrutiny, Linguistics (High Gothic)",
	Talents : "Weapon Training (Flame) orWeapon Training (Low-Tech, Solid Projectile)",
    Trait : "none",
	Equipment : "Hand flamer (orwarhammer and stub revolver), Imperial robes orflak vest, backpack, glow-globe, monotask servo-skull (laud hailer)",
    BackkgroundBonus : "Faith is All",
    Aptitude : ["Leadership", "Social"] //or
};

var ImperialGuard = {
    Skills : "Athletics, Command, Common Lore (Imperial Guard), Medicae or Operate (Surface), Navigate (Surface)",
	Talents : "Weapon Training (Las, Low-Tech)",
    Trait : "none",
	Equipment : "Lasgun (orlaspistol and sword), combat vest, Imperial Guard flak armour, grapnel and line, 12 lho sticks, magnoculars",
    BackkgroundBonus : "Hammer of the Emperor",
    Aptitude : ["Fieldcraft", "Leadership"] //or
};

var Outcast = {
    Skills : "Acrobatics or Sleight of Hand, Common Lore (Underworld), Deceive, Dodge, Stealth ",
	Talents : "Weapon Training (Chain, and Las or Solid Projectile)",
    Trait : "none",
	Equipment : "Autopistol or laspistol, chainsword, armoured bodyglove or flak vest, injector, 2 doses of obscura orslaught",
    BackkgroundBonus : "Never Quit",
    Aptitude : ["Fieldcraft", "Social"] //or
};

var Mutant = {
    Skills : "Acrobatics orAthletics, Awareness, Deceive orIntimidate, Forbidden Lore (Mutants), Survival",
	Talents : "Weapon Training (Low-Tech, Solid Projectile)",
    Trait : "One of the following: Amphibious, Dark-sight, Natural Weapons, Sonar Sense, Sturdy, Toxic (1), Unnatural Agility (1), Unnatural Strength (1), or Unnatural Toughness (1)",
	Equipment : "Shotgun (orstub revolver and great weapon), grapnel and line, heavy leathers, combat vest, 2 doses of stimm",
    BackkgroundBonus : "Twisted Flesh",
    Aptitude : ["Fieldcraft", "Ofence"] //or
};

var BackgroundArr = [AdeptaSororitas, AdeptusAdministratum, AdeptusArbites, AdeptusAstraTelepathica, AdeptusMechanicus, AdeptusMinistorum, ImperialGuard, Outcast, Mutant];