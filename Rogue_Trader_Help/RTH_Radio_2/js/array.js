var AdjBearing = " This is used to decrease the distance a starship must move"+
			 " before it can turn. First, the ship decides if it is moving half"+
			 " its Speed value or its full Speed value. Then, the helmsman"+
			 " makes a <b>Challenging (+0) Pilot (Space Craft)+"+
			 " Manoeuvrability Test</b>. On a success, the starship may"+
			 " turn after moving one VU less than its Speed value."+
			 " For every degree of success, it may turn after"+
			 " moving one less VU. A starship must move at "+
			 " least one VU before turning. Once the starship has turned, it"+
			 " must move the remaining distance so its complete movement"+
			 " is equal to its half or full Speed value.";
			 
var	AdjSpeed = " This is used to adjust the distance a starship is required to"+
			" move. First, the ship decides if it is moving half its Speed"+
			" value or its full Speed value. Then, the helmsman makes a "+
			" <b>Challenging (+0) Pilot (Space Craft)+ Manoeuvrability"+
			" Test</b>. On a success, he may increase or decrease the number"+
			" of VUs his ship moves by one. For every degree of success,"+
			" he may increase or decrease that number by an additional"+
			" one. The starship may not move less than 0 VUs forward"+
			" (the starship may come to a stop using its retro-thrusters, but"+
			" cannot move in reverse). The starship may not move double"+
			" or more its Speed value using this Manoeuvre (only Flank"+
			" Speed allows that).";

var AdjSpeedBearing = " This is used when a starship wants to turn earlier while"+
					" moving more slowly or quickly. First, the ship decides if it"+
					" is moving half its Speed value or its full Speed value. Then,"+
					" the helmsman makes a <b>Hard (&#45;20) Pilot (Space Craft)+"+
					" Manoeuvrability Test</b>. On a success, he may increase or"+
					" decrease the number of VUs his ship moves by 1, and may"+
					" turn after moving one VU less than its Speed Value (as above)."+
					" Likewise, every degree of success awards the benefis of Adjust"+
					" Speed and Adjust Bearing. However, the limitations of both"+
					" Manoeuvre Actions apply.";
						
var NewHeading = " This is used to make radical course changes. The"+
				 " helmsman makes a <b>Difficult (&#45;10) Pilot (Space Craft)+"+
				 " Manoeuvrability Test</b>. Success means the starship may turn"+
				 " when it has moved half its Speed value, then turn again when"+
				 " it has moved its full Speed value. The ship suffers &#45;20 to any"+
				 " Ballistic Skill Tests to fire its weapons during this turn.";

var Disengage = " This Manoeuvre"+
				" may not be performed if the starship is within 8 VUs of"+
				"  any enemy. The helmsman makes a <b>Challenging (+0)"+
				" Pilot (Space Craft)+ Manoeuvrability Test</b> against an"+
				" opposed </b>Challenging (+0) Detection+Scrutiny Test</b> from"+
				" opponents within 20 VUs. Provided their number of successes"+
				" is greater than the successes of each enemy ship, the ship"+
				" leaves combat, and may not renter it. Whether it succeeds or"+
				" fails, the ship may not fire any weapons this turn."+
				" Once a starship has successfully disengaged from combat,"+
				" it may not re-engage its opponents unless the GM specifically"+
				" allows otherwise. Additionally, the Disengage Manoeuvre"+
				" cannot be used to initiate a Stern Chase. This is because the"+
				" disengaging ship is shutting down all non-essential systems,"+
				" including its engines, scanners, and weapons, and doing its"+
				" best to pretend it isn&#8217;t there. It will remain that way for several"+
				" hours or even days, before restarting its systems (hoping that"+
				" everyone else has already left the area).";				 

var EvasiveManoeuv = " This is used to help avoid enemy fire. The helmsman makes"+
				  " a <b>Difficult (&#45;10) Pilot (Space Craft)+ Manoeuvrability"+
				  " Test</b>. Success (and every subsequent degree of success) imposes"+
				  " a &#45;10 penalty to all shooting directed against the starship"+
				  " until the beginning of its next Turn. The starship suffers the"+
				  " same penalty to its own shooting during this time.";

var ActiveAugury = " The character makes a <b>Challenging (+0) Scrutiny+Detection"+
				   " Test</b> to scan the area surrounding the ship. If the scan is"+
				   " successful, the GM should reveal basic (and important)"+
				   " information about celestial bodies, phenomena, and ships"+
				   " within 20 VUs of the vessel. If there is a vessel on Silent"+
				   " Running within scan range, it is immediately detected."+
				   " For every degree of success, the character can extend the"+
				   " range of his scan by five VUs.";
				  
var AidTheMachine = " The character must make a <b>Challenging (+0)"+
					" Tech-Use Test</b> to commune with the craft&#8217;s"+
					" machine spirit and aid it in its calculations."+
					" On a success, the character may add +5"+
					"  to the ship&#8217;s Manoeuvrability or Detection for the remainder"+
					" of the turn. For every two additional degrees of success, the"+
					" character may add an additional +5 to the same system.";				  
				  
var Disinformation = " The character makes a <b>Difficult (&#45;10) Deceive or Blather"+
					 " Test</b>. If he succeeds, he can increase the crew&#8217;s Morale by 1d5"+
					 " for every degree of success for the duration of the combat.";
				  
var EmergencyRepairs = " The character makes a <b>Difficult (&#45;10) Tech-Use Test</b> to"+
					   " direct and aid repair crews. If he succeeds, he repairs one"+
					   " unpowered, damaged, or de-pressurized Component. Repairs"+
					   " normally take 1d5 turns, however, this can be reduced by"+
					   " one turn per degree of success, to a minimum of one turn."+
					   " Emergency Repairs cannot fix destroyed Components.";
				  
var FlankSpeed = " The character must make a <b>Challenging (+0) Tech-Use"+
				 " Test</b> to nurse the ship&#8217;s engines and push them to their"+
				 " limits. Success means the ship may move an additional VU"+
				 " this turn. Every degree of success allows an additional VU"+
				 " of movement. Failure by 2 or more degrees means the ship"+
				 " immediately suffers an Engines Crippled critical hit as the"+
				 " engines are strained too hard.";
				  
var FocusedAugury = "The character makes a <b>Challenging (+0) Scrutiny"+
					 " + Detection Test</b> to scan a particular ship within 20 VUs of"+
					 " his vessel. A successful scan reveals a number of"+
					 " Components aboard the enemy ship. <ul>"+
					 "<li><b>Basic Success:</b> All Essential Components except Auger"+
					 " Arrays and Void Shields</li>"+
					 "<li><b>One Degree of Success:</b> All Weapon Components</li>"+
					 "<li><b>Two Degrees of Success:</b> Auger Arrays, Void Shields,"+
					 " and any combat related Components</li>"+
					 "<li><b>Three Degrees of Success:</b> All Components aboard the"+
					 " target ship</li>" + "</ul>";				  
				  
var HailTheEnemy = " This action is unique as it can be performed by characters"+
				   " who have participated in Manoeuvre Actions or Shooting"+
				   " Actions during the turn. The character contacts one enemy"+
				   " ship using his ship&#8217;s vox systems. He may use Interaction"+
				   " Skills to accomplish certain goals, such as the Intimidation"+
				   " Skill to convince an opponent to surrender. The exact details"+
				   " of how this works is left up to the GM (see page 293 for"+
				   " details on the use of Interaction Skills).";
 
 var HitAndRun = " This allows a character to raid an enemy ship, sabotage it,"+
				 " then retreat. The character makes a <b>Challenging (+0) Pilot"+
				 " (Space Craft) Test</b>, attempting to reach one enemy ship"+
				 " within 5 VUs in a boarding craft, accompanied by a team"+
				 " of raiders. This test can be modified by the target vessel&#8217;s"+
				 " Turret Rating (see page 220). If he fails the test, he is forced"+
				 " to return to his ship. If he fails by four or more degrees, his"+
				 " craft is shot down. The character either survives stranded in a"+
				 " crippled craft or is killed at the GM&#8217;s discretion."+
				 " If he succeeds, he must make an opposed <b>Ordinary (+10)"+
				 " Command Test</b> against the commander of troops aboard the"+
				 " enemy ship. If he succeeds, roll 1d5 on the Critical Hit chart"+
				 " twice and select one result to apply to the enemy ship, plus 1"+
				 " point of damage to Hull Integrity for every degree of success."+
				 " If he fails, his force is forced to retreat back to his boarding"+
				 " craft, unsuccessful in causing mayhem.";
				 
var HoldFast = " The character must have Air of Authority (or a similar Talent"+
			   " at the GM&#8217;s discretion) and make a Challenging (+0)"+
			   " Willpower Test. If he succeeds, he inspires the crew and"+
			   " reduces any damage to Morale by 1, plus 1 for every degree"+
			   " of success to a minimum of 1. Hold Fast! may only cancel out"+
			   " Morale damage suffered during the previous turn.";				 
				 
var JamComm	= 	" The Character makes a <b>Difficult (&#45;10) Tech-Use Test</b>,"+
				" targeting a ship within 10 VUs of his vessel. If he succeeds,"+
				" that ship is unable to use vox-transmitters or other"+
				" technologies to communicate with other ships. Psychic"+
				" communicators.such as an Astropath. are unaffected. For"+
				" every degree of success, the range of Jam Communications is"+
				" extended by one VU.";	 
				 
var LockOnTarget = " The character makes a <b>Challenging (+0)"+
				   " Scrutiny + Detection Test</b> to use the"+
				   " ship&#8217;s augers and calculate exact firing solutions on an enemy"+
				   " vessel. If successful, he adds a +5 bonus to the Ballistic Skill"+
				   " Test to fire one Weapon Component during this turn. Every"+
				   " two additional degrees of success ad an additional +5 to the"+
				   " same Test.";
	
var PrepareRepelBorders = " This character must make a <b>Challenging (+0) Command"+
						  " Test</b> in order to organise and arm a portion of the crew. If he"+
						  " succeeds, he may add +10 to any opposed Command Test"+
						  " he performs against enemy borders during subsequent turns"+
						  " of combat, plus an additional +5 for every degree of success."+
						  " Although the character is not required to make additional"+
						  " tests on subsequent turns, he will be occupied rallying the"+
						  " defenders for as long as he wants to maintain the bonus.";

var PutYourBacksIntoIt = " The character makes a <b>Challenging (+0) Intimidate</b>"+
						 " or <b>Charm Test</b>. If he succeeds, he can choose to add +5"+
						 " to a Ballistic Skill Test to fire a Weapon Component, an"+
						 " Emergency Repairs Action, or an attempt to put out a fire"+
						 " made during this turn. He may aid an additional Ballistic Skill"+
						 " Test, Emergency Repairs Action, or fire-fighting attempt for"+
						 " every three degrees of success.";

var Triage = " The character makes a <b>Difficult (&#45;10) Medicae Test</b>. If he"+
			 " succeeds, he reduces any damage to Crew Population by 1,"+
			 " plus 1 for every degree of success to a minimum of 1. Triage"+
			 " may only cancel Crew Population damage suffered during the"+
			 " previous Turn.";

	
var arr = [AdjBearing, AdjSpeed, AdjSpeedBearing, NewHeading, Disengage, EvasiveManoeuv,
		   ActiveAugury, AidTheMachine, Disinformation, EmergencyRepairs, FlankSpeed,
		   FocusedAugury, HailTheEnemy, HitAndRun, HoldFast, JamComm, LockOnTarget,
		   PrepareRepelBorders, PutYourBacksIntoIt, Triage];



























































