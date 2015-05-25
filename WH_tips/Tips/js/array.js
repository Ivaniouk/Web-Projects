var tankDamage = " <p><b>1-3 Crew Shaken.</b> The vehicle can only fire Snap Shots until the end of its "
				 + " next turn</p>"
				 + " <p><b>4 Crew Stunned.</b>The vehicle can only fire Snap Shots until the end of its next turn."
				 + " If the vehicle is a Zooming Flyer, it must move 18 and cannot turn at all in its next Movement"
				 + " phase. If the vehicle is not a Zooming Flyer, it cannot move or pivot until the"
				 + " end of its next turn.</p>"
				 + " <p><b>5 Weapon Destroyed.</b> One of the vehicle’s weapons (randomly chosen) is"
				 + " destroyed – including any combi- or built in weapons. This can include vehicle"
				 + " upgrades that are weapons, such as pintle-mounted storm bolters or hunterkiller missiles. Do not count weapons that have run out of ammunition –"
				 + " they’re already non-functional for the most part. If a vehicle has no weapons"
				 + " left, treat this result as an Immobilised result instead (see below).</p>"
				 + " <p><b>6 Immobilised.</b>"
				 + " If the vehicle is a Chariot, count this result as a Crew"
				 + " Stunned result instead (see above). If the vehicle is a Zooming Flyer, roll a"
				 + " further D6: on a 1 or 2, that Flyer will immediately Crash and Burn! (see"
				 + " below), on a 3+ the Flyer counts this result as Crew Stunned instead (see"
				 + " above). Other vehicles are Immobilised. An Immobilised vehicle cannot move"
				 + " – it may not even pivot, but its turrets may continue to rotate to select targets,"
				 + " and other weapons retain their normal arcs of fire. Any Immobilised results"
				 + " suffered by an already Immobilised vehicle instead remove an additional Hull"
				 + " Point.</p>"
				 + " <p><b>7+ Explodes!</b>"
				 + " The vehicle is destroyed. If the vehicle is a Zooming"
                 + " Flyer, it will immediately Crash and Burn! (see below), otherwise nearby units"
                 + " suffer a Strength 4 AP- hit for each model within D6&#34; of the vehicle (resolve"
                 + " this once, regardless of how many times the result is inflicted), as flaming"
                 + " debris scatters across the area. The vehicle is then removed from the"
                 + " battlefield.</p>"
				 + " <p><b>Crash and Burn!</b>"
				 + " Centre the large blast marker over the Flyer – it then"
				 + " scatters 2D6&#34;. Any units under the blast marker&#8217;s final position suffer a"
				 + " number of Strength 6 AP- hits equal to the number of models that unit has"
				 + " under the marker. The Flyer is then removed from the battlefield.</p>";

var buildingDamage = "<p><b>0-1 - Breach!</b> Massive cracks appear in the building’s walls."
					+ " The building’s Armour Value is reduced by 1 (on all facings) for the remainder"
					+ " of the battle. This is cumulative with any other penalties to the building’s"
					+ " Armour Value.</p>"
					+ " <p><b>2 - Tremor.</b> The building shakes violently, throwing its occupants to their"
					+ " knees."
					+ " If the building is occupied, the occupying unit can only make Snap Shots in the"
					+ " following turn. If an occupying unit abandons the building in their next turn,"
					+ " they can only disembark 3&#34;, rather than the full 6&#34;.</p>"
					+ " <p><b>3 - Partial Collapse.</b> Part ofthe support structure is blasted away, causing a"
					+ " chunk ofroofto fall in.</b>"
					+ " If the building is occupied, the occupying unit suffers D6 Strength 6 AP- hits"
					+ " with the Ignores Cover special rule. In addition, if the building has any"
					+ " emplaced weapons, they can only fire Snap Shots in the following turn."
					+ " <p><b>4 - Structural Collapse.</b> Internal supports are destroyed, causing several"
					+ " levels to collapse under their own weight."
					+ " If the building is occupied, the occupying unit suffers 2D6 Strength 6 AP- hits"
					+ " with the Ignores Cover special rule. In addition, if the building has any"
					+ " emplaced weapons, one randomly determined weapon is destroyed and the"
					+ " remainder can only fire Snap Shots in the following turn.</p>"
					+ " <p><b>5 - Catastrophic Breach.</b> A huge slab of masonry tumbles from the"
					+ " building&#8217;s flank."
					+ " The building’s Armour Value is reduced by D3 (on all facings) for the"
					+ " remainder of the battle. This is cumulative with any other penalties to the"
					+ " building&#8217;s Armour Value. In addition, if the building has any emplaced"
					+ " weapons, one randomly determined weapon is destroyed and the remainder"
					+ " can only fire Snap Shots in the following turn.</p>"
					+ " <p><b>6 - Total Collapse.</b> The roofand several internal floors fall in, crushing"
					+ " many ofthe garrison and driving the remainder outside."
					+ " The building is destroyed: all emplaced weapons and battlement upgrades on"
					+ " the building are also destroyed. If the building is occupied, the occupying unit"
					+ " suffers 2D6 Strength 6 AP- hits with the Ignores Cover special rule and must"
					+ " then immediately disembark from the building, performing an emergency"
					+ " disembarkation if necessary (survivors cannot disembark to the battlements)."
					+ " Any models that cannot disembark are removed as casualties. Assuming they"
					+ " were not destroyed, units that have disembarked must then take a Pinning test."
					+ " The building is left on the table, but can no longer be occupied."
					+ " Battlements that are part of a building that suffers a Total Collapse damage"
					+ " result are destroyed. Each unit on the battlements suffers D6 Strength 6 APhits"
					+ " with the Ignores Cover special rule, and must then take a Pinning test. The"
					+ " battlements are considered to be Ruins terrain for the rest of the battle.</p>"
					+ "<p><b>7+ - Detonation!</b> The shot punches through the building’s walls to explode"
					+ " amongst ammunition or fuel stores within."
					+ " The building is destroyed: all emplaced weapons and battlement upgrades on"
					+ " the building are also destroyed. If the building is occupied, the occupying unit"
					+ " suffers 4D6 Strength 6 AP- hits with the Ignores Cover special rule and must"
					+ " then immediately disembark from the building, performing an emergency"
					+ " disembarkation if necessary (survivors cannot disembark to the battlements)."
					+ " Any models that cannot disembark are removed as casualties. Assuming they"
					+ " were not destroyed, units that have disembarked must then take a Pinning test."
					+ " The building is then removed and replaced with a crater of roughly the same"
					+ " size (if you have one)."
					+ " Battlements that are part of a building that suffers a Detonation damage result"
					+ " are destroyed. Each unit on the battlements suffers 2D6 Strength 6 AP- hits"
					+ " with the Ignores Cover special rule and must then immediately make a 6&#34;"
					+ " move in order to move off of the battlements (this movement is not slowed by"
					+ " difficult terrain). Any models that cannot move off of the battlements are"
					+ " removed as casualties. Assuming they were not destroyed, all units that had to"
					+ " move off the battlements must then take a Pinning test.</p>";

var WarpPerils =    " <p><b>1 - Dragged into the Warp:</b> The Psyker must take a Leadership test. If the test"
				    + " is passed, the Psyker suffers 1 Wound/glancing hit with no saves of any kind"
				    + " allowed. If the test is failed, the Psyker is removed as a casualty and his unit"
				    + " suffers D6 Strength 6 AP1 hits. For Wound allocation purposes, assume the"
				    + " attack is coming from the Psyker that suffered Perils of the Warp.</p>"
				    + " <p><b>2 - Mental Purge:</b> The Psyker suffers 1 Wound/glancing hit with no saves of"
				    + " any kind allowed. In addition, randomly select one psychic power known to the"
				    + " Psyker. That power is immediately lost, and cannot be used by the Psyker for"
				    + " the rest of the battle.</p>"
				    + " <p><b>3 - Power Drain:</b> The Psyker suffers 1 Wound/glancing hit with no saves of"
				    + " any kind allowed. In addition, if it is currently the Psychic phase, roll a D3;"
				    + " both players lose a number of Warp Charge points equal to the result.</p>"
				    + " <p><b>4 - Psychic Backlash:</b> The Psyker suffers 1 Wound/glancing hit with no saves"
				    + " of any kind allowed.</p>"
				    + " <p><b>5 - Empyric Feedback:</b> The Psyker must take a Leadership test. If the test is"
				    + " failed, the Psyker suffers 1 Wound/glancing hit with no saves of any kind"
				    + " allowed. If the test is passed, the Psyker suffers no ill effects… this time.</p>"
				    + " <p><b>6 - Warp Surge:</b> The Psyker must take a Leadership test. If the test is failed,"
				    + " the Psyker suffers 1 Wound/glancing hit with no saves of any kind allowed. If"
				    + " the test is passed, the Psyker gains a 3+ Invulnerable save as well as the"
				    + " Fleshbane, Armourbane and Smash special rules, until the start of the next"
				    + " friendly Psychic phase.</p>";

var StandardOrders = "<p><b>Take Aim!</b></p>" 				
					 + " <p>The ordered unit must make a shooting attack. When resolving this shooting attack, all"
					 + " models in the ordered unit have the <b>Precision Shot</b> special rule.</p>"
					 + " <p>-------------------------------------------------------------------------</p>"
					 + " <p><b>Smite at Will!</b></p>"
					 + " <p>The ordered unit must make a shooting attack. When resolving this shooting attack, the"
					 + " ordered unit has the <b>Split Fire</b> special rule.</p>"
					 + " <p>--------------------------------------------------------------------------</p>"
					 + " <p><b>First Rank, Fire! Second Rank, Fire!</b></p>"
					 + " <p>The ordered unit must make a shooting attack. When resolving this shooting attack, all"
					 + " models firing with lasguns or hot-shot lasguns <b>fire one additional shot.</b></p>"
					 + " <p>---------------------------------------------------------------------------</p>"
					 +"  <p><b>Forwards, for the Emperor</b></p>"
					 + " <p>The ordered unit must make a shooting attack. Once this shooting attack has been resolved,"
					 + " the ordered unit must <b>Run</b>, even though a unit cannot normally Shoot and Run in the same"
					 + " phase.</p>"
					 + " <p>----------------------------------------------------------------------------</p>"
					 + " <p><b>Move! Move! Move!</b></p>"
					 + " <p>The ordered unit must Run. When determining how far the unit Runs, <b>roll three dice</b> and use"
					 + " the highest result.</p>"
					 + " <p>-----------------------------------------------------------------------------</p>"
					 + " <p><b>Suppressive Fire!</b></p>"
					 + " <p>The ordered unit must make a shooting attack. When resolving this shooting attack, all"
					 + " weapons in the ordered unit have the <b>Pinning</b> special rule.</p>"
					 + " <p>------------------------------------------------------------------------------</p>";
					 
var SeniorOrders = "<p><b>Bring it Down!</b></p>"
					+ "<p> Bring it Down! can only be issued by a model with the <b>Senior Officer</b> special rule. The"
					+ " ordered unit must make a shooting attack. When resolving this shooting attack, all models in"
					+ " the ordered unit have the <b>Tank Hunters</b> and Monster Hunter special rules.</p>"
					+ " <p>--------------------------------------------------------------------------------</p>"
					+ "<p><b>Fire on my Target!</b></p>"
					+ " <p>Fire on my Target! can only be issued by a model with the <b>Senior Officer</b> special rule. The"
					+ " ordered unit must make a shooting attack. When resolving this shooting attack, all weapons"
					+ " in the ordered unit have the <b>Ignores Cover</b> special rule.</p>"
					+ " <p>---------------------------------------------------------------------------------</p>"
					+ " <p><b>Get Back in the Fight!</b></p>"
					+ " <p>Get Back in the Fight! can only be issued by a model with the <b>Senior Officer</b> special rule."
					+ "  Unlike other orders, ‘Get Back in the Fight!’ can only be issued to a unit that is falling back or"
					+ "  that has gone to ground. The ordered unit immediately regroups if falling back, but it does"
					+ "  not make a 3&#34; move. If the unit has gone to ground, the effects of going to ground are"
					+ "  immediately cancelled instead. In either case, the ordered unit can act (shoot, run, charge"
					+ "  etc.) normally for the remainder of the turn.</p>"
					 
var arr = [tankDamage, buildingDamage, WarpPerils, StandardOrders];
var ordersArr = [StandardOrders, SeniorOrders];


























































