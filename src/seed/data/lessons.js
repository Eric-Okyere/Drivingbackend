/**
 * Practical driving lessons + quiz question bank.
 *
 * Content is grounded in how Ghana's DVLA licensing process actually works:
 * - Theory/CBT: 40 multiple-choice questions, 75% (30/40) pass mark, 45-minute limit,
 *   drawn from a pool of 200+ covering road signs, traffic rules and regulations.
 * - Practical test: 15-25 minutes on pre-defined routes in controlled-site and real-traffic
 *   conditions, assessed by a DVLA instructor on: starting procedures, hill starts, reverse
 *   parking, traffic navigation, emergency stops and three-point turns.
 * - Ghana drives on the RIGHT (right-hand traffic): overtake from the left only, roundabouts
 *   flow anti-clockwise, and misjudging these is one of the most common reasons learners fail.
 * - License classes: A (motorcycles), B (private cars, 18+), C (commercial/taxi, 21+),
 *   D/E (heavy/articulated vehicles, 25+).
 * - Common real-world failure points: rolling through stop signs, missed blind-spot checks,
 *   stalling repeatedly, speeding in residential areas, failing to yield to pedestrians.
 *
 * Each lesson includes a short "videoScript" — a narrated walkthrough in the style of the
 * AI video lesson scripts used for classroom content, so it reads naturally as a guided lesson.
 */

const lessons = [
  // ---------------------------------------------------------------------
  // BEGINNER
  // ---------------------------------------------------------------------
  {
    title: 'Cockpit Drill & Getting to Know Your Vehicle',
    category: 'beginner',
    order: 1,
    durationMinutes: 12,
    summary:
      'Before the car ever moves, every DVLA examiner watches how you set yourself up. This lesson covers the cockpit drill: seat, mirrors, seatbelt and controls.',
    objective:
      'Perform a complete cockpit drill (D-S-S-S-M: Doors, Seat, Steering, Seatbelt, Mirrors) confidently and in the right order, every time you get in the car.',
    videoScript:
      "Welcome to your very first practical lesson. Before you even think about starting the engine, a DVLA examiner is already scoring you the moment you sit in the car. We call this the cockpit drill. First, close your door properly and make sure it's locked. Next, adjust your seat so your feet reach the pedals with a slight bend in the knee, and your hands reach the top of the steering wheel with a slight bend in the elbow. Then adjust the steering wheel itself if it's adjustable. Put on your seatbelt — always, no exceptions, even for a short test manoeuvre. Finally, set your mirrors: the interior mirror should frame the full rear windscreen, and each side mirror should show a sliver of your own car plus the road behind. Only once all five checks are done do you touch the key. Get into this habit now, because it becomes automatic muscle memory that will carry you all the way through your test and your driving life.",
    sections: [
      {
        heading: 'The D-S-S-S-M sequence',
        body: 'Doors (closed and locked) → Seat (distance and height) → Steering wheel (reach and tilt) → Seatbelt (on, snug across the hip and shoulder) → Mirrors (interior, then both side mirrors). Doing these in the same order every time means you never forget a step under test pressure.',
      },
      {
        heading: 'Why examiners watch this closely',
        body: "A driver who skips mirror adjustment or drives with a loose seatbelt is flagged immediately in Ghana's practical assessment, because it signals poor habits before the car has even moved. Controlled-site testing often begins with the examiner simply observing your cockpit drill.",
      },
      {
        heading: 'Getting familiar with the controls',
        body: 'Locate the indicators, headlight switch, wipers, handbrake, gear lever and pedals without looking down. In a manual car, practise pressing the clutch fully with the engine off so your leg learns the travel distance before you try it with the engine running.',
      },
    ],
    keyPoints: [
      'Always follow the same order: Doors, Seat, Steering, Seatbelt, Mirrors.',
      'Mirrors are checked and adjusted BEFORE moving, not after.',
      'Seatbelt goes on every single time, even for a one-minute manoeuvre.',
      'Know your controls by feel, not by looking down at them.',
    ],
    commonMistakes: [
      'Starting the engine before adjusting mirrors.',
      'Sitting too far from the pedals, leading to poor clutch control later.',
      'Forgetting the seatbelt during short practice manoeuvres and building a bad habit.',
    ],
    dvlaRelevance:
      'The practical test starts scoring from the moment you get in the vehicle — examiners specifically note whether your cockpit drill is complete and unhurried.',
    questions: [
      {
        prompt: 'What does the "cockpit drill" refer to before driving off?',
        choices: [
          'Checking the engine oil and tyre pressure',
          'Adjusting doors, seat, steering, seatbelt and mirrors in order',
          'Warming up the engine for five minutes',
          'Filling out the DVLA test form',
        ],
        correctIndex: 1,
        explanation:
          'The cockpit drill (D-S-S-S-M) is the routine of closing/locking doors, adjusting your seat, adjusting the steering wheel, fastening your seatbelt, and setting your mirrors — always in that order, before the car moves.',
        difficulty: 'easy',
        tags: ['cockpit-drill', 'basics'],
      },
      {
        prompt: 'When should you adjust your mirrors?',
        choices: [
          'After you have already started driving',
          'Only if another car appears behind you',
          'Before moving off, as part of the cockpit drill',
          "Mirrors don't need adjusting if the last driver was your height",
        ],
        correctIndex: 2,
        explanation:
          'Mirrors must be correctly set before you move off. Adjusting them while driving is dangerous and will be marked down heavily on a DVLA test.',
        difficulty: 'easy',
        tags: ['cockpit-drill'],
      },
      {
        prompt: 'Your interior mirror should be adjusted to show:',
        choices: [
          'Only the sky through the back window',
          'The full rear windscreen',
          'Your own face',
          'The passenger seat',
        ],
        correctIndex: 1,
        explanation: 'The interior mirror should frame the entire rear windscreen so you have maximum visibility of traffic behind you.',
        difficulty: 'easy',
        tags: ['mirrors'],
      },
      {
        prompt: 'Why does correct seat position matter for a driving test?',
        choices: [
          'It only affects comfort, not test performance',
          'It affects your ability to fully press the clutch and reach the steering wheel safely',
          'Examiners do not consider seat position',
          'It is only important for tall drivers',
        ],
        correctIndex: 1,
        explanation:
          'A poor seat position can mean you cannot depress the clutch fully or control the steering wheel properly, which leads directly to stalling, poor control, and test faults.',
        difficulty: 'medium',
        tags: ['cockpit-drill', 'clutch-control'],
      },
      {
        prompt: 'What is the correct order in the D-S-S-S-M cockpit drill?',
        choices: [
          'Mirrors, Seatbelt, Steering, Seat, Doors',
          'Doors, Seat, Steering, Seatbelt, Mirrors',
          'Seatbelt, Doors, Mirrors, Seat, Steering',
          'Steering, Doors, Seat, Mirrors, Seatbelt',
        ],
        correctIndex: 1,
        explanation: 'D-S-S-S-M stands for Doors, Seat, Steering, Seatbelt, Mirrors — always performed in that order.',
        difficulty: 'easy',
        tags: ['cockpit-drill'],
      },
      {
        prompt: 'When practising clutch control with the engine off, what is the goal?',
        choices: [
          'To learn the biting point and full pedal travel by feel',
          'To save fuel',
          'To test the handbrake',
          'It has no real purpose',
        ],
        correctIndex: 0,
        explanation:
          'Practising with the engine off lets your leg learn exactly how far the clutch pedal travels and roughly where the biting point is, without the pressure of the car actually moving.',
        difficulty: 'medium',
        tags: ['clutch-control'],
      },
    ],
  },
  {
    title: 'Starting Off, Clutch Control & Gear Changes',
    category: 'beginner',
    order: 2,
    durationMinutes: 18,
    summary:
      'Moving off smoothly and changing gear without jerking or stalling is one of the very first things a DVLA examiner assesses in real traffic.',
    objective:
      'Move off smoothly from stationary using clutch, gas and handbrake together, and change up/down through the gears without stalling.',
    videoScript:
      "Now that your cockpit drill is second nature, let's get the car moving. Press the clutch fully, select first gear, then bring your right foot gently onto the accelerator. Slowly release the clutch until you feel the car want to move — that's the biting point. As you feel it, release the handbrake and add a touch more gas while easing the clutch up the rest of the way. If the car shudders or the engine sounds like it is struggling, you've released the clutch too fast — press it back down slightly. Once moving, listen to the engine: as it starts to sound strained, it's time to change up a gear. Press the clutch fully, move the gear lever, and release the clutch smoothly again. Down at junctions, you'll do the reverse — brake, then clutch, then change down. Practise this until it feels rhythmic rather than mechanical.",
    sections: [
      {
        heading: 'The biting point',
        body: "The biting point is where the clutch plates just start to touch and transmit power. Finding it consistently — rather than releasing the clutch quickly — is the single biggest factor in avoiding stalls, especially at Ghana's DVLA test sites which often include a slight incline.",
      },
      {
        heading: 'Moving off on the flat vs. an incline',
        body: 'On flat ground: clutch down, gear in, gas + clutch up together, release handbrake as the car takes the bite. On an incline, keep the handbrake on slightly longer, and bring the revs up a little more before releasing it, so the car does not roll backward.',
      },
      {
        heading: 'Changing gear smoothly',
        body: 'Always fully depress the clutch when changing gear, and match your gear to your road speed — too high a gear at low speed causes lugging and stalling; too low a gear at high speed causes excessive engine noise and jerkiness.',
      },
    ],
    keyPoints: [
      'Find the biting point before adding gas.',
      'Always press the clutch fully when changing gear.',
      'Match gear choice to your speed and the road ahead.',
      'On an incline, use extra revs and a delayed handbrake release to avoid rolling back.',
    ],
    commonMistakes: [
      'Releasing the clutch too quickly, causing a stall.',
      'Riding the clutch (resting your foot on it while driving).',
      'Forgetting to release the handbrake, which strains the engine and clutch.',
      'Looking down at the gear lever instead of the road.',
    ],
    dvlaRelevance:
      'Stalling multiple times is explicitly listed as a common reason candidates fail the Ghana DVLA practical test — smooth clutch control directly protects your score.',
    questions: [
      {
        prompt: 'What is the "biting point" of a clutch?',
        choices: [
          'The point where the clutch pedal is fully pressed down',
          'The point where the clutch plates just begin to engage and transmit power',
          'The moment you change into second gear',
          'The point where the handbrake releases automatically',
        ],
        correctIndex: 1,
        explanation:
          'The biting point is where the clutch plates start to make contact, transferring engine power to the wheels. Finding it smoothly is key to moving off without stalling or jerking.',
        difficulty: 'easy',
        tags: ['clutch-control'],
      },
      {
        prompt: 'Which of these is a common reason candidates fail the Ghana DVLA practical test?',
        choices: [
          'Wearing a seatbelt',
          'Stalling the car multiple times',
          'Using indicators correctly',
          'Checking mirrors regularly',
        ],
        correctIndex: 1,
        explanation:
          'Stalling multiple times is one of the documented common failure points on the DVLA practical test, alongside rolling through stop signs and missed blind-spot checks.',
        difficulty: 'medium',
        tags: ['dvla-test', 'clutch-control'],
      },
      {
        prompt: 'When moving off on an uphill incline, what should you do differently from flat ground?',
        choices: [
          'Release the handbrake immediately, before any gas',
          'Use extra revs and release the handbrake slightly later to avoid rolling back',
          'Skip first gear and start in second',
          'Keep both feet off the pedals',
        ],
        correctIndex: 1,
        explanation:
          'On an incline, releasing the handbrake too early lets the car roll backward. Bringing the revs up more and holding the handbrake slightly longer prevents rollback while you find the bite.',
        difficulty: 'medium',
        tags: ['hill-start', 'clutch-control'],
      },
      {
        prompt: 'What should you always do before changing gear?',
        choices: [
          'Speed up',
          'Fully press the clutch pedal',
          'Turn on the hazard lights',
          'Sound the horn',
        ],
        correctIndex: 1,
        explanation: 'The clutch must be fully depressed to disengage the engine from the gearbox before you can change gear smoothly.',
        difficulty: 'easy',
        tags: ['gear-changes'],
      },
      {
        prompt: 'What does "riding the clutch" mean, and why is it a bad habit?',
        choices: [
          'Changing gears too slowly; it wastes fuel',
          'Resting your foot on the clutch pedal while driving, causing premature wear',
          'Driving in neutral downhill; it saves fuel',
          'Using the clutch to brake instead of the brake pedal',
        ],
        correctIndex: 1,
        explanation:
          'Riding the clutch means keeping your foot resting on the pedal while driving, which causes partial engagement, unnecessary wear, and poor control — examiners watch for this.',
        difficulty: 'medium',
        tags: ['clutch-control'],
      },
      {
        prompt: 'You are driving at a low speed but still in 4th gear, and the engine feels like it is struggling. What should you do?',
        choices: [
          'Add more gas to compensate',
          'Change down to a lower gear to match your speed',
          'Turn off the engine and restart',
          'Ignore it — this is normal',
        ],
        correctIndex: 1,
        explanation:
          'A struggling, low-revving engine at low speed in a high gear is "lugging." Changing down to a lower gear matches engine speed to road speed and prevents stalling or damage.',
        difficulty: 'medium',
        tags: ['gear-changes'],
      },
    ],
  },
  {
    title: 'Right-Hand Traffic Rules & Lane Discipline',
    category: 'beginner',
    order: 3,
    durationMinutes: 15,
    summary:
      "Ghana drives on the right. Many learners who know the road signs perfectly still fail because they misjudge right-hand traffic logic — this lesson fixes that.",
    objective:
      'Confidently keep correct lane position, understand priority logic, and know exactly which side to overtake from on Ghanaian roads.',
    videoScript:
      "Here's something many learners underestimate: in Ghana, you drive on the right-hand side of the road. That single fact changes almost everything about lane discipline. You should normally stay in the right-hand lane unless overtaking, and when you do overtake, you always move to the LEFT lane to pass, then return to the right. Never overtake from the right — that is one of the fastest ways to fail your test and, more importantly, to cause an accident. At junctions without clear signs, remember priority usually goes to traffic already established on the main road, and you must always double-check — never assume another driver will follow the rules. Keep a genuine three-second gap to the vehicle ahead, and check your mirrors every five to eight seconds so you always know what's happening around you, not just ahead.",
    sections: [
      {
        heading: 'Right-hand traffic basics',
        body: 'Ghana uses right-hand traffic: you drive on the right side of the road, and the steering wheel is on the left side of the car. Unnecessary use of the left (overtaking) lane when it is not needed is a common fault.',
      },
      {
        heading: 'Overtaking direction',
        body: 'Because you drive on the right, you overtake by moving into the lane on your LEFT, passing, then safely returning to the right lane. Overtaking from the right is dangerous and heavily penalised.',
      },
      {
        heading: 'Priority and defensive assumptions',
        body: 'Never assume you have the right of way just because you think you should. Verify with eye contact or clear road behaviour, especially at junctions without traffic lights. Defensive driving means assuming other road users might not follow the rules.',
      },
    ],
    keyPoints: [
      'Ghana drives on the RIGHT side of the road.',
      'Overtake from the LEFT lane only, then return to the right.',
      'Check mirrors every 5-8 seconds; keep a 3-second following gap.',
      'Never assume priority — verify before proceeding at junctions.',
    ],
    commonMistakes: [
      'Overtaking from the right side.',
      'Unnecessary driving in the left (overtaking) lane.',
      'Assuming right of way without checking.',
      'Following too closely (less than 3 seconds) behind the car ahead.',
    ],
    dvlaRelevance:
      "Misjudging right-hand traffic logic is one of the top reasons learners fail — DVLA examiners specifically watch lane discipline and overtaking direction throughout the real-traffic portion of the test.",
    questions: [
      {
        prompt: 'On which side of the road do vehicles drive in Ghana?',
        choices: ['The left side', 'The right side', 'Either side depending on the region', 'The middle, until traffic appears'],
        correctIndex: 1,
        explanation: 'Ghana uses right-hand traffic — vehicles are driven on the right-hand side of the road.',
        difficulty: 'easy',
        tags: ['right-hand-traffic'],
      },
      {
        prompt: 'When overtaking another vehicle on a Ghanaian road, you should:',
        choices: [
          'Overtake from the right',
          'Overtake from the left, then return to the right lane',
          'Overtake from whichever side is closer',
          'Flash your headlights and overtake from either side',
        ],
        correctIndex: 1,
        explanation: 'Because Ghana drives on the right, safe overtaking means moving into the left lane to pass, then returning to the right once clear.',
        difficulty: 'easy',
        tags: ['overtaking', 'right-hand-traffic'],
      },
      {
        prompt: 'What is a recommended minimum following distance behind the vehicle in front?',
        choices: ['0.5 seconds', '1 second', '3 seconds', '10 seconds'],
        correctIndex: 2,
        explanation: 'A minimum 3-second following distance gives you enough time to react and brake safely if the vehicle ahead stops suddenly.',
        difficulty: 'medium',
        tags: ['defensive-driving'],
      },
      {
        prompt: 'How often should you check your mirrors while driving?',
        choices: ['Only when changing lanes', 'Every 5-8 seconds', 'Once every few minutes', 'Only at the start of the journey'],
        correctIndex: 1,
        explanation: 'Checking your mirrors every 5-8 seconds keeps you continuously aware of traffic around you, not just ahead of you.',
        difficulty: 'easy',
        tags: ['mirrors', 'defensive-driving'],
      },
      {
        prompt: 'At a junction with no clear priority signs, what is the safest approach?',
        choices: [
          'Assume you have the right of way and proceed',
          'Verify it is safe and clear before proceeding, never assuming priority',
          'Stop completely and wait for another driver to wave you through',
          'Sound your horn continuously until other cars stop',
        ],
        correctIndex: 1,
        explanation: 'Defensive driving means never assuming priority — always verify the junction is genuinely clear and safe before proceeding.',
        difficulty: 'medium',
        tags: ['junctions', 'defensive-driving'],
      },
      {
        prompt: 'Why is unnecessary driving in the left lane considered a fault in Ghana?',
        choices: [
          "It's not a fault at all",
          'The left lane is reserved for overtaking only, not normal cruising',
          'The left lane is for motorcycles only',
          'It is only a fault at night',
        ],
        correctIndex: 1,
        explanation: 'On right-hand traffic roads, the left lane is meant for overtaking. Cruising in it unnecessarily blocks faster traffic and is marked as a lane discipline fault.',
        difficulty: 'medium',
        tags: ['right-hand-traffic', 'lane-discipline'],
      },
    ],
  },
  {
    title: 'Reading Road Signs: Regulatory, Warning & Informatory',
    category: 'beginner',
    order: 4,
    durationMinutes: 20,
    summary:
      "Ghana's road signs fall into three families: regulatory (mandatory), warning, and informatory/marker signs. Knowing which is which lets you react instantly, not guess.",
    objective:
      'Correctly identify and respond to regulatory, warning, and informatory road signs used on Ghanaian roads.',
    videoScript:
      "Road signs in Ghana fall into three main families. First, regulatory signs — these are commands you must obey, like Stop, Yield, No Entry, or a maximum speed limit. Ignore these and you are breaking the law, not just making a mistake. Second, warning signs — usually triangular or diamond-shaped — which alert you to hazards ahead, like a sharp bend, a speed bump, or a narrowing road. These don't command you to do something specific, but they tell you to adjust your driving now, before you reach the hazard. Third, informatory or marker signs — these guide you with information, like directions to a junction, an alternative route, or a route number. A good driver reads all three types together, well before reaching them, rather than reacting at the last second. And remember two commonly confused signs: 'No Waiting' does not mean 'No Entry' — you may briefly stop to drop someone off, just not park. And the 'No Motor Vehicles' sign, a red-circled icon of a car and motorcycle, bans both, not just one.",
    sections: [
      {
        heading: 'Regulatory (mandatory) signs',
        body: "These are commands: Stop, Yield/Give Way, No Entry, speed limits, turn restrictions, road closures. They are usually circular with a red border, or an octagon for Stop. Disobeying them is a traffic offence, not just a driving fault.",
      },
      {
        heading: 'Warning signs',
        body: 'Typically triangular, these alert you to a hazard ahead — a bend, an intersection, a speed bump, a narrowing road, or pedestrians crossing. They ask you to prepare and adjust speed in advance.',
      },
      {
        heading: 'Informatory / marker signs',
        body: 'These give directional or location information: junction ahead, alternative routes, route markers, distance markers. They are usually rectangular and help with navigation rather than commanding an action.',
      },
      {
        heading: 'Two commonly confused signs',
        body: "\"No Waiting\" allows a brief stop to pick up or drop off passengers, but not parking. \"No Motor Vehicles Allowed\" — a white circle with a car and motorcycle inside a red border — bans BOTH vehicle types, a detail many learners get wrong.",
      },
    ],
    keyPoints: [
      'Regulatory signs are commands you must obey by law.',
      'Warning signs (often triangular) prepare you for a hazard ahead.',
      'Informatory/marker signs give directions and route information.',
      '"No Waiting" allows a brief stop, but not parking.',
      '"No Motor Vehicles" bans cars AND motorcycles.',
    ],
    commonMistakes: [
      'Confusing "No Waiting" with "No Entry".',
      'Reacting to warning signs only once the hazard is already visible, instead of in advance.',
      'Ignoring regulatory signs because "no one else is around".',
    ],
    dvlaRelevance:
      'Road signs make up a large share of the 40-question DVLA theory test, and misreading them on the practical route (like missing a Stop sign) is an automatic fault.',
    questions: [
      {
        prompt: 'Which category of road sign is a command you must legally obey, such as Stop or No Entry?',
        choices: ['Warning signs', 'Regulatory (mandatory) signs', 'Informatory signs', 'Advertising signs'],
        correctIndex: 1,
        explanation: 'Regulatory (mandatory) signs are legal commands — ignoring them, like rolling through a Stop sign, is a traffic offence and an automatic test fault.',
        difficulty: 'easy',
        tags: ['road-signs'],
      },
      {
        prompt: 'What is the main purpose of a warning sign?',
        choices: [
          'To give a legal command you must obey',
          'To alert you to a hazard ahead so you can adjust your driving in advance',
          'To show the distance to the next town',
          'To advertise nearby businesses',
        ],
        correctIndex: 1,
        explanation: 'Warning signs alert drivers to hazards ahead — such as bends, speed bumps, or narrowing roads — so they can prepare before reaching them.',
        difficulty: 'easy',
        tags: ['road-signs'],
      },
      {
        prompt: 'What does a "No Waiting" sign actually mean?',
        choices: [
          'You may not enter this road at all',
          'You may briefly stop to pick up or drop off someone, but not park',
          'You must wait until a police officer signals you through',
          'The road ahead is closed permanently',
        ],
        correctIndex: 1,
        explanation: '"No Waiting" allows a brief, attended stop (like dropping someone off) but does not allow parking or leaving the vehicle unattended.',
        difficulty: 'medium',
        tags: ['road-signs'],
      },
      {
        prompt: 'A white circular sign with a red border showing a car and a motorcycle means:',
        choices: [
          'Cars only are banned; motorcycles are allowed',
          'Motorcycles only are banned; cars are allowed',
          'Both cars and motorcycles are banned',
          'Parking is allowed for cars and motorcycles',
        ],
        correctIndex: 2,
        explanation: 'This regulatory sign bans BOTH motor vehicle types shown — a detail that catches out many learners who assume it only restricts one.',
        difficulty: 'medium',
        tags: ['road-signs'],
      },
      {
        prompt: 'Informatory (marker) signs are mainly used to:',
        choices: [
          'Command drivers to stop or yield',
          'Warn of an immediate hazard',
          'Give directions, routes, or location information',
          'Indicate a speed limit',
        ],
        correctIndex: 2,
        explanation: 'Informatory or marker signs provide navigational information such as junctions ahead, alternative routes, or route numbers.',
        difficulty: 'easy',
        tags: ['road-signs'],
      },
      {
        prompt: 'You see a triangular warning sign for a speed bump well ahead. What should you do?',
        choices: [
          'Wait until you see the bump, then brake hard',
          'Ignore it since it is only a warning, not a command',
          'Begin slowing down in advance so you cross the bump under control',
          'Speed up to cross it quickly',
        ],
        correctIndex: 2,
        explanation: 'Warning signs are meant to be acted on in advance — slowing down early lets you cross the hazard smoothly and safely, rather than reacting at the last second.',
        difficulty: 'medium',
        tags: ['road-signs', 'defensive-driving'],
      },
    ],
  },
  {
    title: 'Basic Junctions & Giving Way',
    category: 'beginner',
    order: 5,
    durationMinutes: 15,
    summary:
      'Junctions are where many small mistakes — a missed blind spot, a rolled stop — turn into test faults. This lesson builds a solid, repeatable junction routine.',
    objective:
      'Approach, assess, and cross or turn at basic junctions safely, using correct observation, signalling and yielding.',
    videoScript:
      "Every junction deserves the same disciplined routine: Mirror, Signal, Position, Speed, Look. As you approach, check your mirrors to know what's behind you. Signal your intention early enough for other road users to react. Position your car correctly in the lane for the turn you're making. Adjust your speed so you can stop if needed. Then look — properly look — in all directions the junction opens to, including a genuine blind-spot check over your shoulder, not just the mirror. At a Stop sign, that means a complete stop, wheels not moving, before you look and proceed. At a Yield sign, you don't have to stop if the way is clear, but you must be ready to. The single fastest way to fail here is rolling through a stop sign because 'no cars were coming' — the examiner is testing your discipline, not your luck.",
    sections: [
      {
        heading: 'The MSPSL routine',
        body: 'Mirror – Signal – Position – Speed – Look. Apply this every time you approach a junction, whether turning or going straight ahead, so your process never depends on how busy the road looks.',
      },
      {
        heading: 'Stop vs. Yield junctions',
        body: 'A Stop sign requires a complete stop — the car must be fully stationary — before proceeding, regardless of whether traffic is visible. A Yield (Give Way) sign only requires you to stop if necessary to let other traffic pass safely.',
      },
      {
        heading: 'Blind spots matter as much as mirrors',
        body: 'Mirrors do not show everything. A quick shoulder check for the blind spot, especially before turning or changing lanes, is something DVLA examiners specifically look for — skipping it is marked as a fault even if nothing was actually there.',
      },
    ],
    keyPoints: [
      'Use Mirror – Signal – Position – Speed – Look at every junction.',
      'A Stop sign always means a complete, full stop — no exceptions.',
      'A Yield sign means give way if needed, but you may proceed if genuinely clear.',
      'Always add a shoulder (blind-spot) check, not just mirrors.',
    ],
    commonMistakes: [
      'Rolling through a Stop sign without fully stopping.',
      'Skipping the blind-spot shoulder check.',
      'Signalling too late for other drivers to react.',
      'Misjudging a gap in traffic and pulling out too early.',
    ],
    dvlaRelevance:
      'Rolling through stop signs and inadequate blind-spot checks are both explicitly named as common DVLA test failure points — junction discipline is one of the highest-value skills to master.',
    questions: [
      {
        prompt: 'What does the "S" in the Mirror-Signal-Position-Speed-Look routine stand for (used twice)?',
        choices: ['Stop and Steer', 'Signal and Speed', 'Start and Stall', 'Side and Sound'],
        correctIndex: 1,
        explanation: 'The routine is Mirror, Signal, Position, Speed, Look — Signal and Speed are the two "S" steps.',
        difficulty: 'easy',
        tags: ['junctions'],
      },
      {
        prompt: 'At a Stop sign, what is required regardless of whether traffic is visible?',
        choices: [
          'Slow down significantly but you may keep rolling',
          'A complete stop with the vehicle fully stationary',
          'Sound the horn before proceeding',
          'Only stop if another vehicle is approaching',
        ],
        correctIndex: 1,
        explanation: 'A Stop sign always requires the vehicle to come to a complete, full stop, whether or not other traffic is visible.',
        difficulty: 'easy',
        tags: ['junctions', 'road-signs'],
      },
      {
        prompt: 'Why is a blind-spot shoulder check necessary even after checking mirrors?',
        choices: [
          'Mirrors cannot show certain areas alongside and behind the vehicle',
          "It's a formality with no real safety purpose",
          'It replaces the need for mirrors entirely',
          'Only required for motorcycles',
        ],
        correctIndex: 0,
        explanation: 'Mirrors have blind spots that cannot show vehicles or pedestrians in certain positions — a shoulder check closes that visibility gap before turning or changing lanes.',
        difficulty: 'medium',
        tags: ['blind-spots', 'junctions'],
      },
      {
        prompt: 'At a Yield (Give Way) sign, when may you proceed without stopping completely?',
        choices: [
          'Never — Yield signs always require a full stop',
          'Only if you sound your horn first',
          'If the way is genuinely clear and it is safe to proceed',
          'Only at night',
        ],
        correctIndex: 2,
        explanation: 'A Yield sign means you must give way to other traffic, but if the junction is genuinely clear, you may proceed without coming to a complete stop.',
        difficulty: 'medium',
        tags: ['junctions', 'road-signs'],
      },
      {
        prompt: 'Which of these is listed as a common DVLA practical test failure point?',
        choices: [
          'Signalling too early',
          'Rolling through a stop sign',
          'Checking mirrors too often',
          'Wearing a seatbelt',
        ],
        correctIndex: 1,
        explanation: 'Rolling through a stop sign — not coming to a complete stop — is explicitly named as a common reason candidates fail the practical test.',
        difficulty: 'easy',
        tags: ['dvla-test', 'junctions'],
      },
      {
        prompt: 'When should you signal at a junction?',
        choices: [
          'Exactly as you begin turning the wheel',
          'Early enough for other road users to see and react to your intention',
          'Only if another car is directly behind you',
          'After completing the turn',
        ],
        correctIndex: 1,
        explanation: 'Signalling early gives following and approaching traffic enough time to understand and react to your intended manoeuvre.',
        difficulty: 'easy',
        tags: ['junctions', 'signalling'],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // INTERMEDIATE
  // ---------------------------------------------------------------------
  {
    title: 'Roundabouts: Anti-Clockwise Navigation',
    category: 'intermediate',
    order: 1,
    durationMinutes: 16,
    summary:
      "Roundabout entry and circulation errors are named as a specific, common DVLA failure point. This lesson builds a clear, repeatable roundabout routine.",
    objective:
      'Approach, enter, circulate and exit a roundabout correctly using anti-clockwise flow and proper lane discipline.',
    videoScript:
      "Roundabouts confuse a lot of learners, but the logic is simple once you fix one fact in your mind: because Ghana drives on the right, roundabouts flow anti-clockwise. As you approach, decide early which exit you need, choose your lane accordingly — left lane for a full loop or left-hand exit, right lane for the first exit — and signal appropriately. Give way to traffic already circulating on the roundabout from your left, since they have priority. Enter smoothly when there's a safe gap, don't stop unnecessarily if the way is clear, and stay in your chosen lane as you go around. As you approach your exit, signal right and check your mirrors and blind spot before peeling off. The two most common roundabout mistakes are entering without giving way to circulating traffic, and drifting into the wrong lane halfway around — both count as test faults.",
    sections: [
      {
        heading: 'Anti-clockwise flow',
        body: 'On right-hand traffic roads like in Ghana, roundabouts flow anti-clockwise. Traffic already on the roundabout, approaching from your left, has priority over traffic entering.',
      },
      {
        heading: 'Choosing your lane on approach',
        body: "Generally: take the right-hand lane for the first exit, and the left-hand lane if you're going straight ahead or taking a later exit, then move to the correct lane before your exit. Decide early — last-second lane changes on a roundabout are dangerous and penalised.",
      },
      {
        heading: 'Entering and exiting safely',
        body: "Give way to circulating traffic from your left; don't force your way in. Once on the roundabout, hold your lane. As you near your exit, signal, check mirrors and blind spot, then exit smoothly.",
      },
    ],
    keyPoints: [
      'Roundabouts flow anti-clockwise in Ghana.',
      'Circulating traffic from your left has priority over entering traffic.',
      'Choose your lane before entering, based on your exit.',
      'Signal your exit and check blind spots before leaving the roundabout.',
    ],
    commonMistakes: [
      'Entering without giving way to circulating traffic.',
      'Drifting between lanes while circulating.',
      'Signalling too late, or not at all, before exiting.',
      'Hesitating unnecessarily when the roundabout is clearly safe to enter.',
    ],
    dvlaRelevance:
      "Roundabout entry and circulation errors are explicitly named among the common mistakes that cause automatic failure on Ghana's right-hand-traffic DVLA test.",
    questions: [
      {
        prompt: 'In Ghana, which direction does traffic flow around a roundabout?',
        choices: ['Clockwise', 'Anti-clockwise', 'It varies by city', 'Straight through the middle'],
        correctIndex: 1,
        explanation: 'Because Ghana uses right-hand traffic, roundabouts flow anti-clockwise, with circulating traffic approaching from your left.',
        difficulty: 'easy',
        tags: ['roundabouts'],
      },
      {
        prompt: 'When entering a roundabout, who generally has priority?',
        choices: [
          'Traffic waiting to enter',
          'Traffic already circulating, approaching from your left',
          'Whoever arrives first regardless of position',
          'Larger vehicles always have priority',
        ],
        correctIndex: 1,
        explanation: 'Vehicles already circulating the roundabout, approaching from the left, have priority over vehicles waiting to enter.',
        difficulty: 'easy',
        tags: ['roundabouts', 'priority'],
      },
      {
        prompt: 'What should you do before your exit on a roundabout?',
        choices: [
          'Nothing — just turn the wheel at the exit',
          'Signal, check mirrors and blind spot, then exit smoothly',
          'Stop completely before exiting',
          'Switch on hazard lights',
        ],
        correctIndex: 1,
        explanation: 'Signalling your exit in advance, combined with a mirror and blind-spot check, ensures other drivers know your intention and the exit is clear.',
        difficulty: 'medium',
        tags: ['roundabouts', 'signalling'],
      },
      {
        prompt: 'Which lane should you generally take on approach if you plan to take the first exit?',
        choices: ['The far-left lane', 'The right-hand lane', 'Either lane, it makes no difference', 'The lane closest to oncoming traffic'],
        correctIndex: 1,
        explanation: 'For the first exit, the right-hand lane on approach is generally correct, keeping your path short and predictable for other drivers.',
        difficulty: 'medium',
        tags: ['roundabouts'],
      },
      {
        prompt: 'Which of these is a specifically named common DVLA test mistake related to roundabouts?',
        choices: [
          'Signalling too early',
          'Roundabout entry and circulation errors',
          'Driving too slowly on the approach',
          'Checking mirrors too frequently',
        ],
        correctIndex: 1,
        explanation: 'Roundabout entry/circulation errors are explicitly listed as a common mistake causing automatic test failure.',
        difficulty: 'medium',
        tags: ['dvla-test', 'roundabouts'],
      },
      {
        prompt: 'Why is it dangerous to change lanes suddenly while circulating a roundabout?',
        choices: [
          "It isn't dangerous, it's expected",
          'Other drivers may not anticipate it, risking a collision',
          'It saves time and is encouraged',
          'It only matters for motorcycles',
        ],
        correctIndex: 1,
        explanation: 'Sudden lane changes on a roundabout are unpredictable to other drivers who are relying on you holding your chosen lane, increasing collision risk.',
        difficulty: 'medium',
        tags: ['roundabouts', 'defensive-driving'],
      },
    ],
  },
  {
    title: 'Overtaking Safely (From the Left Only)',
    category: 'intermediate',
    order: 2,
    durationMinutes: 14,
    summary:
      'Overtaking is one of the highest-risk manoeuvres on the road. This lesson covers the full check-signal-commit-return routine for safe, legal overtaking in Ghana.',
    objective:
      'Judge when it is safe to overtake, execute the manoeuvre from the correct (left) side, and return to lane safely.',
    videoScript:
      "Overtaking causes more serious accidents than almost any other manoeuvre, so treat it with real respect. First ask: do I actually need to overtake? If yes, check your mirrors and blind spot, make sure the road ahead is clear far enough for you to complete the whole manoeuvre and return safely, and confirm no one is already overtaking you. Signal left — remember, in Ghana you overtake by moving into the left lane. Accelerate smoothly past, without lingering alongside the other vehicle, then signal right and move back into your lane once you can see the vehicle you passed in your interior mirror. Never overtake near a junction, a bend, the brow of a hill, or where there's a solid centre line — these are all situations where you cannot see far enough ahead to be sure it's safe.",
    sections: [
      {
        heading: 'Before you overtake: the safety checklist',
        body: 'Is it necessary? Is the road ahead clear far enough to complete the whole manoeuvre safely? Is anyone already overtaking you? Only proceed if the answer supports it.',
      },
      {
        heading: 'Executing the manoeuvre',
        body: "Signal left, move into the left lane, accelerate to pass without lingering, signal right, and return to the right lane only once you can see the overtaken vehicle in your interior mirror — not just your side mirror.",
      },
      {
        heading: 'Places you must never overtake',
        body: 'Never overtake near junctions, on bends, approaching the brow of a hill, near pedestrian crossings, or where road markings show a solid line — all situations with limited visibility or higher risk.',
      },
    ],
    keyPoints: [
      'Only overtake from the left lane in Ghana.',
      'Confirm the road is clear far enough to complete the whole manoeuvre.',
      'Never overtake near junctions, bends, hill brows, or solid centre lines.',
      "Return to your lane once you can see the passed vehicle in your interior mirror.",
    ],
    commonMistakes: [
      'Overtaking without enough visibility of oncoming traffic.',
      'Overtaking on a bend or near a junction.',
      'Cutting back into the lane too early, too close to the overtaken vehicle.',
      'Forgetting to signal before returning to the original lane.',
    ],
    dvlaRelevance:
      'Attempting to overtake on the right, and misjudging overtaking safety generally, are both named among the mistakes that cause automatic DVLA test failure.',
    questions: [
      {
        prompt: 'In Ghana, from which side should you overtake another vehicle?',
        choices: ['The right side', 'The left side', 'Either side depending on speed', 'Only from a stationary position'],
        correctIndex: 1,
        explanation: 'Because Ghana drives on the right, safe overtaking is always done from the left lane.',
        difficulty: 'easy',
        tags: ['overtaking'],
      },
      {
        prompt: 'Before overtaking, which of these should you confirm?',
        choices: [
          'That the vehicle ahead is driving slowly',
          'That the road ahead is clear far enough to complete the whole manoeuvre safely',
          'That your fuel tank is at least half full',
          'That it is daytime',
        ],
        correctIndex: 1,
        explanation: 'You must be certain you can complete the entire overtaking manoeuvre and return to your lane safely before committing to it.',
        difficulty: 'easy',
        tags: ['overtaking'],
      },
      {
        prompt: 'Which of these locations should you NEVER overtake at?',
        choices: ['A long, straight, empty road', 'Near a junction or bend with limited visibility', 'A dual carriageway with clear sight lines', 'An empty highway at midday'],
        correctIndex: 1,
        explanation: 'Junctions and bends limit your visibility of oncoming traffic and other road users, making overtaking there extremely dangerous.',
        difficulty: 'medium',
        tags: ['overtaking'],
      },
      {
        prompt: 'When is it safe to return to your original lane after overtaking?',
        choices: [
          'Immediately after passing the front of the vehicle',
          'Once you can see the overtaken vehicle in your interior mirror',
          'As soon as you signal, regardless of position',
          'Only once the other driver flashes their lights',
        ],
        correctIndex: 1,
        explanation: 'Seeing the overtaken vehicle fully in your interior mirror confirms you have enough space to safely move back into your original lane.',
        difficulty: 'medium',
        tags: ['overtaking', 'mirrors'],
      },
      {
        prompt: 'Attempting to overtake on which side is named as a common DVLA test failure point?',
        choices: ['The left side', 'The right side', 'Neither — overtaking is never tested', 'Overtaking is only tested for commercial licenses'],
        correctIndex: 1,
        explanation: 'Attempting to overtake on the right is explicitly listed as a common mistake that leads to automatic test failure in Ghana.',
        difficulty: 'medium',
        tags: ['dvla-test', 'overtaking'],
      },
      {
        prompt: 'Why should you avoid overtaking where there is a solid centre line?',
        choices: [
          'It is only a suggestion, not a rule',
          'A solid line typically marks a zone with limited visibility or where overtaking is prohibited for safety',
          'Solid lines only apply to trucks',
          'It has no particular meaning',
        ],
        correctIndex: 1,
        explanation: 'A solid centre line generally indicates a stretch of road where overtaking is unsafe or prohibited due to limited visibility ahead.',
        difficulty: 'medium',
        tags: ['overtaking', 'road-signs'],
      },
    ],
  },
  {
    title: 'Reverse Parking & Bay Parking',
    category: 'intermediate',
    order: 3,
    durationMinutes: 18,
    summary:
      'Reverse parking is one of the specific manoeuvres DVLA examiners assess on the controlled test site. This lesson breaks it into a repeatable, controlled sequence.',
    objective:
      'Reverse park into a bay or parallel space accurately, using slow speed, full observation, and small steering corrections.',
    videoScript:
      "Reverse parking rewards patience, not speed. Position your car so you have a clear reference point — for bay parking, pull up alongside or just past the bay, and for parallel parking, stop level with the car in front of the space. Check all around you: mirrors, blind spots, and physically look over your shoulder through the rear window. Select reverse, cover the brake, and move at a crawling pace — slower than walking speed. Turn the steering wheel at the right moment based on your reference points, then straighten up as the car lines up with the bay or kerb. If anything looks even slightly off, it is completely fine to stop, pull forward, and reset — examiners reward a safe, controlled correction far more than a fast but risky guess. Finish by checking your position: roughly parallel to the kerb or centred in the bay, wheels straight.",
    sections: [
      {
        heading: 'Preparation and positioning',
        body: 'Choose a clear reference point before reversing — alongside the bay, or level with the car ahead of a parallel space. Good positioning at the start makes the rest of the manoeuvre far easier.',
      },
      {
        heading: 'Observation throughout',
        body: 'Check mirrors, blind spots, and turn to look through the rear window continuously while reversing — not just once at the start. DVLA examiners specifically watch for continuous observation during reversing manoeuvres.',
      },
      {
        heading: 'Slow, controlled steering',
        body: "Move at a crawling pace so you have time to react. It's acceptable, and often wise, to stop and correct your position rather than continuing an angle that's clearly wrong.",
      },
    ],
    keyPoints: [
      'Choose a clear reference point before starting to reverse.',
      'Observe continuously — mirrors, blind spots, and over-the-shoulder — while moving.',
      'Move at a slow, crawling pace throughout.',
      "It's better to stop and reset than to continue an incorrect angle.",
    ],
    commonMistakes: [
      'Reversing too fast to react to steering corrections.',
      'Checking only once at the start, instead of continuously.',
      'Panicking and oversteering when the angle looks slightly wrong.',
      'Finishing at an angle instead of straight/parallel.',
    ],
    dvlaRelevance:
      'Reverse parking is one of the specific skills explicitly assessed on the DVLA controlled test site — examiners score both accuracy and the quality of your observation throughout.',
    questions: [
      {
        prompt: 'What is the recommended speed when reverse parking?',
        choices: ['As fast as possible to finish quickly', 'A slow, crawling pace', 'The same speed as normal driving', 'It does not matter'],
        correctIndex: 1,
        explanation: 'Reversing at a slow, crawling pace gives you time to observe, react, and make small steering corrections safely.',
        difficulty: 'easy',
        tags: ['reverse-parking'],
      },
      {
        prompt: 'While reversing into a parking space, how often should you check your surroundings?',
        choices: ['Only once, before starting to reverse', 'Continuously throughout the manoeuvre', 'Only at the very end', 'Only if another car appears'],
        correctIndex: 1,
        explanation: 'Observation must be continuous throughout the manoeuvre — mirrors, blind spots and looking through the rear window — not just a single check at the start.',
        difficulty: 'easy',
        tags: ['reverse-parking', 'observation'],
      },
      {
        prompt: 'If your reverse parking angle looks clearly wrong halfway through, what should you do?',
        choices: [
          'Continue anyway to avoid looking unsure',
          'Stop, pull forward, and reset the manoeuvre safely',
          'Speed up to finish faster',
          'Turn the wheel fully in the opposite direction while still moving',
        ],
        correctIndex: 1,
        explanation: 'Stopping to reset is a safe, controlled decision that examiners reward — it is far better than continuing an unsafe or clearly incorrect angle.',
        difficulty: 'medium',
        tags: ['reverse-parking'],
      },
      {
        prompt: 'Before starting a reverse parking manoeuvre, you should first:',
        choices: [
          'Turn on the radio',
          'Position the car using a clear reference point',
          'Remove your seatbelt for better visibility',
          'Accelerate hard to build momentum',
        ],
        correctIndex: 1,
        explanation: 'A clear reference point — such as being level with the car in front of a parallel space — sets you up for an accurate manoeuvre.',
        difficulty: 'easy',
        tags: ['reverse-parking'],
      },
      {
        prompt: 'What does a DVLA examiner specifically assess during a reverse parking manoeuvre?',
        choices: [
          'Only the final position of the car',
          'Both the accuracy of parking and the quality of observation throughout',
          'How quickly you complete it',
          'Whether you use the radio',
        ],
        correctIndex: 1,
        explanation: 'Examiners assess the full manoeuvre — accuracy of the final position AND continuous, correct observation throughout the process.',
        difficulty: 'medium',
        tags: ['dvla-test', 'reverse-parking'],
      },
      {
        prompt: 'What is a safe way to check behind you while reversing, beyond using mirrors?',
        choices: [
          'Trust the mirrors completely; no other check is needed',
          'Turn and look directly through the rear window',
          'Ask a passenger to guide you instead of looking yourself',
          'Roll down the window and listen for sounds',
        ],
        correctIndex: 1,
        explanation: 'Turning to look directly through the rear window gives you direct visual confirmation that mirrors alone cannot fully provide.',
        difficulty: 'easy',
        tags: ['reverse-parking', 'observation'],
      },
    ],
  },
  {
    title: 'Hill Starts & Gradient Control',
    category: 'intermediate',
    order: 4,
    durationMinutes: 14,
    summary:
      'Hill starts are one of the specific skills examiners assess on the practical test — get this wrong and you roll back into the car behind you.',
    objective:
      'Move off from a stationary position on an uphill gradient without rolling backward or stalling.',
    videoScript:
      "A hill start uses exactly the same clutch and gas coordination you already learned, with one extra safety net: the handbrake. Stop on the incline with the handbrake engaged and the car in first gear. Bring the revs up slightly higher than on flat ground — you can hear the engine note rise. Slowly bring the clutch up to the biting point; you'll feel the car strain slightly against the handbrake. At that exact point, release the handbrake smoothly while easing the clutch up further and adding a touch more gas. The car should move forward without rolling back even a few centimetres. If you feel it start to roll backward, that means you released the handbrake too early — press it back down, reset, and try again with a slightly later release. This is a manoeuvre where practising the sequence slowly, again and again, beats trying to do it quickly.",
    sections: [
      {
        heading: 'The extra step: handbrake timing',
        body: 'On a hill start, the handbrake replaces the footbrake in holding the car still while you find the biting point. It must be released at exactly the moment the clutch bite plus gas is enough to move the car forward, not before.',
      },
      {
        heading: 'Listening and feeling for the bite',
        body: 'A slightly raised engine note and a gentle "straining" feel against the handbrake tells you the clutch has reached the biting point and the car is ready to move once the handbrake releases.',
      },
      {
        heading: 'What to do if you roll back',
        body: 'If the car rolls back even slightly, immediately reapply the handbrake and footbrake, reset your position, and try again with a later handbrake release. Rolling back is a serious fault on the DVLA test, so control matters more than speed.',
      },
    ],
    keyPoints: [
      'Use slightly more revs on an incline than on flat ground.',
      'Release the handbrake only once you feel the clutch bite holding the car.',
      "If you roll back, stop immediately and reset — don't panic and rush.",
      'Practise the sequence slowly and repeatedly rather than quickly.',
    ],
    commonMistakes: [
      'Releasing the handbrake before finding the biting point.',
      'Not adding enough gas, causing the engine to stall on the incline.',
      'Panicking and releasing the clutch too fast after a roll-back.',
    ],
    dvlaRelevance:
      "Hill starts are one of the specific skills a DVLA examiner assesses directly during the practical test — rolling backward, even briefly, is treated as a serious safety fault.",
    questions: [
      {
        prompt: 'What extra control do you rely on during a hill start that you may not need as much on flat ground?',
        choices: ['The horn', 'The handbrake', 'The wipers', 'The hazard lights'],
        correctIndex: 1,
        explanation: 'The handbrake holds the car in place on an incline while you find the clutch biting point, preventing roll-back before you add enough power to move forward.',
        difficulty: 'easy',
        tags: ['hill-start'],
      },
      {
        prompt: 'When should you release the handbrake during a hill start?',
        choices: [
          'Immediately, before touching the clutch',
          'Only once you feel the clutch reach the biting point and the car straining forward',
          'Only after moving the gear lever to neutral',
          'Handbrake release timing does not matter',
        ],
        correctIndex: 1,
        explanation: 'The handbrake should be released once the clutch bite is holding the car, so it moves forward smoothly rather than rolling back.',
        difficulty: 'medium',
        tags: ['hill-start', 'clutch-control'],
      },
      {
        prompt: 'What should you do if the car rolls backward slightly during a hill start?',
        choices: [
          'Keep going and hope it corrects itself',
          'Immediately reapply the brakes, reset, and try again',
          'Release the clutch fully to speed up',
          'Turn off the engine mid-roll',
        ],
        correctIndex: 1,
        explanation: 'Rolling back is a safety fault — the correct response is to immediately reapply the brakes, reset your position, and attempt the hill start again with better timing.',
        difficulty: 'medium',
        tags: ['hill-start'],
      },
      {
        prompt: 'Compared to a flat start, a hill start generally requires:',
        choices: ['Less gas and a faster clutch release', 'Slightly more gas and a later handbrake release', 'No gas at all', 'A completely different gear'],
        correctIndex: 1,
        explanation: 'Hill starts typically need slightly more engine revs and a later handbrake release to counteract gravity pulling the car backward.',
        difficulty: 'medium',
        tags: ['hill-start'],
      },
      {
        prompt: 'Why is rolling backward on a hill start treated seriously on the DVLA test?',
        choices: [
          'It is not treated seriously at all',
          'It could cause a collision with a vehicle behind you and shows a loss of control',
          'It only matters in wet weather',
          'It only applies to automatic cars',
        ],
        correctIndex: 1,
        explanation: 'Rolling backward risks colliding with a following vehicle and demonstrates a loss of control, which examiners treat as a significant safety fault.',
        difficulty: 'medium',
        tags: ['dvla-test', 'hill-start'],
      },
      {
        prompt: 'What is the best way to master hill starts before your test?',
        choices: [
          'Attempt them only once, right before the test',
          'Practise the sequence slowly and repeatedly until it becomes consistent',
          'Avoid hills entirely during practice',
          'Only practise on completely flat roads',
        ],
        correctIndex: 1,
        explanation: 'Repeated, slow practice builds the muscle memory and timing needed to perform a hill start consistently and confidently under test conditions.',
        difficulty: 'easy',
        tags: ['hill-start'],
      },
    ],
  },
  {
    title: 'Emergency Stop Procedure',
    category: 'intermediate',
    order: 5,
    durationMinutes: 12,
    summary:
      'The emergency stop is a specific, assessed manoeuvre: bring the car to a controlled, safe stop as quickly as possible from normal driving speed.',
    objective:
      'Perform a safe, controlled emergency stop, braking firmly without locking the wheels or losing steering control.',
    videoScript:
      "The emergency stop tests how you react when a hazard suddenly appears — a child running into the road, or a vehicle pulling out unexpectedly. When the examiner or a real hazard signals the need to stop, react immediately: both hands firmly on the wheel, press the brake pedal firmly and progressively — not a single violent stab — while keeping the car travelling in a straight line. Only press the clutch down at the very last moment before the car would otherwise stall, so you don't lose engine braking early. Once stopped, apply the handbrake and put the car in neutral. Then, critically, check your mirrors before doing anything else, because a vehicle behind you may not have stopped as quickly. This manoeuvre is about controlled speed of reaction, not tyre-screeching drama — a smooth, firm, straight stop is exactly what's being assessed.",
    sections: [
      {
        heading: 'React immediately, brake firmly',
        body: 'The moment a hazard appears, react without hesitation: firm, progressive brake pressure while keeping both hands on the wheel and the car travelling straight.',
      },
      {
        heading: 'Clutch timing',
        body: 'Delay pressing the clutch until just before the engine would stall — this keeps engine braking working for you during most of the stop, which helps you stop in a shorter distance.',
      },
      {
        heading: 'After stopping',
        body: 'Apply the handbrake, select neutral, and immediately check your mirrors — a following vehicle may not stop as quickly as you did, so awareness after the stop is as important as the stop itself.',
      },
    ],
    keyPoints: [
      'React immediately when a hazard requires an emergency stop.',
      'Brake firmly and progressively, keeping the car travelling straight.',
      'Delay the clutch until just before stalling, to use engine braking.',
      'Check mirrors immediately after stopping for vehicles behind you.',
    ],
    commonMistakes: [
      'Hesitating before reacting to the hazard.',
      'Slamming the brake in a single violent stab, risking wheel lock or skid.',
      'Pressing the clutch too early, losing engine braking assistance.',
      'Forgetting to check mirrors immediately after stopping.',
    ],
    dvlaRelevance:
      'The emergency stop is one of the specific manoeuvres explicitly listed as assessed on the DVLA road examination, testing both reaction time and control under sudden pressure.',
    questions: [
      {
        prompt: 'When performing an emergency stop, how should you apply the brake?',
        choices: [
          'With a single hard stab',
          'Firmly and progressively, keeping the car travelling straight',
          'Very lightly, to avoid discomfort',
          'Only using the handbrake',
        ],
        correctIndex: 1,
        explanation: 'Firm, progressive brake pressure stops the car quickly while keeping it under control and travelling straight, avoiding wheel lock or skidding.',
        difficulty: 'easy',
        tags: ['emergency-stop'],
      },
      {
        prompt: 'When should you press the clutch during an emergency stop?',
        choices: [
          'Immediately, at the very start of braking',
          'Just before the engine would otherwise stall',
          'Never — the clutch is not used in an emergency stop',
          'Only after the car has fully stopped',
        ],
        correctIndex: 1,
        explanation: 'Delaying the clutch until just before stalling keeps engine braking working for most of the stop, helping reduce stopping distance.',
        difficulty: 'medium',
        tags: ['emergency-stop', 'clutch-control'],
      },
      {
        prompt: 'What should you do immediately after coming to a stop in an emergency stop manoeuvre?',
        choices: [
          'Drive off again right away',
          'Apply the handbrake, select neutral, and check mirrors for traffic behind you',
          'Turn off the engine completely',
          'Open the door to check for damage',
        ],
        correctIndex: 1,
        explanation: 'After stopping, securing the car (handbrake, neutral) and immediately checking mirrors ensures you are aware of any vehicle behind that may not have stopped in time.',
        difficulty: 'medium',
        tags: ['emergency-stop'],
      },
      {
        prompt: 'What is the main skill being assessed in an emergency stop manoeuvre?',
        choices: [
          'How fast you can accelerate afterward',
          'Reaction time and controlled, straight-line braking under sudden pressure',
          'Parallel parking accuracy',
          'Your ability to reverse',
        ],
        correctIndex: 1,
        explanation: 'The emergency stop tests how quickly and safely you can react to a sudden hazard, bringing the car under control in a straight line.',
        difficulty: 'easy',
        tags: ['emergency-stop', 'dvla-test'],
      },
      {
        prompt: 'Why is braking in a single violent stab a mistake?',
        choices: [
          'It stops the car too slowly',
          'It risks locking the wheels and losing steering control',
          'It uses too much fuel',
          "It's actually the recommended technique",
        ],
        correctIndex: 1,
        explanation: 'A sudden, violent brake application can lock the wheels, causing a skid and loss of steering control — progressive firm pressure is safer and often faster overall.',
        difficulty: 'medium',
        tags: ['emergency-stop'],
      },
      {
        prompt: 'Why is checking your mirrors right after an emergency stop important?',
        choices: [
          "It isn't important — the manoeuvre is complete once stopped",
          'A vehicle behind you may not have stopped as quickly, creating a collision risk',
          'It is only a habit with no safety value',
          'It helps you check your appearance',
        ],
        correctIndex: 1,
        explanation: 'A following vehicle may still be closing in even after you have stopped, so an immediate mirror check keeps you aware of that ongoing risk.',
        difficulty: 'medium',
        tags: ['emergency-stop', 'mirrors'],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // ADVANCED
  // ---------------------------------------------------------------------
  {
    title: 'Three-Point Turn / Turn in the Road',
    category: 'advanced',
    order: 1,
    durationMinutes: 16,
    summary:
      'Turning the car around in a road too narrow for a U-turn is a named, assessed DVLA manoeuvre requiring precise control and full observation.',
    objective:
      'Turn the vehicle to face the opposite direction on a narrow road using forward, reverse and forward movements, with full observation each time.',
    videoScript:
      "The three-point turn is really three short, deliberate movements, not one continuous motion. First, from a stop at the side of the road, check all around, signal if appropriate, then move forward slowly while turning the wheel fully toward the far kerb, stopping just before you reach it. Second, check all around again — mirrors, blind spots, and physically looking — select reverse, and turn the wheel fully the opposite way as you reverse slowly toward the kerb you started from, stopping just before it. Third, check around once more, select first gear, straighten the wheel as you move forward, completing the turn until you're facing the opposite direction in your own lane. The full observation before each of the three movements is exactly what examiners are grading — rushing through without checking is the single biggest way to lose marks here, even if the steering itself is perfect.",
    sections: [
      {
        heading: 'Three deliberate movements',
        body: 'Forward (turning fully toward the far kerb), reverse (turning fully the other way, toward the starting kerb), forward again (straightening out to complete the turn). Each movement is slow and controlled, not rushed.',
      },
      {
        heading: 'Observation before every movement',
        body: 'Before each of the three movements, a full observation check — mirrors, blind spots, and a direct look — is required. This is graded independently of the steering itself.',
      },
      {
        heading: 'Steering technique',
        body: "Turn the steering wheel as fully and quickly as needed at low speed to make the tightest possible turn within the width of the road, since the manoeuvre often needs to fit in a limited space.",
      },
    ],
    keyPoints: [
      'The turn is three separate, controlled movements: forward, reverse, forward.',
      'Full observation is required before each of the three movements.',
      'Turn the steering wheel fully at low speed to make the tightest turn possible.',
      "It's fine to use more than three movements if the road is narrow — safety over speed.",
    ],
    commonMistakes: [
      'Skipping observation before the reverse movement.',
      'Turning the steering wheel too slowly, needing extra movements unnecessarily.',
      'Rushing the manoeuvre and clipping the kerb.',
      'Forgetting to check for pedestrians and cyclists throughout.',
    ],
    dvlaRelevance:
      'The three-point turn (turn in the road) is one of the specific manoeuvres examiners assess directly on the DVLA controlled test site.',
    questions: [
      {
        prompt: 'How many main movements make up a standard three-point turn?',
        choices: ['One continuous movement', 'Two movements', 'Three movements: forward, reverse, forward', 'Five movements'],
        correctIndex: 2,
        explanation: 'The three-point turn consists of three distinct movements: forward toward the far kerb, reverse toward the starting kerb, then forward again to complete the turn.',
        difficulty: 'easy',
        tags: ['three-point-turn'],
      },
      {
        prompt: 'What is required before EACH of the three movements in this manoeuvre?',
        choices: [
          'Sounding the horn',
          'A full observation check — mirrors, blind spots, and looking directly',
          'Turning on the headlights',
          'Nothing extra is required between movements',
        ],
        correctIndex: 1,
        explanation: 'A complete observation check before every single movement is specifically graded by examiners, independent of how well the steering itself is performed.',
        difficulty: 'medium',
        tags: ['three-point-turn', 'observation'],
      },
      {
        prompt: 'If the road is quite narrow, what should you do during a three-point turn?',
        choices: [
          "Force it into exactly three movements even if it means hitting the kerb",
          "It's acceptable to use more than three small movements to stay safe",
          'Drive onto the pavement to complete the turn',
          'Abandon the manoeuvre entirely',
        ],
        correctIndex: 1,
        explanation: 'Safety takes priority over a strict three-movement count — using extra small movements to avoid a kerb or obstacle is acceptable and safer.',
        difficulty: 'medium',
        tags: ['three-point-turn'],
      },
      {
        prompt: 'What steering technique helps you make the tightest possible turn at low speed?',
        choices: [
          'Turning the wheel slowly and only partially',
          'Turning the wheel fully and promptly at low speed',
          'Keeping the wheel straight throughout',
          'Turning the wheel only during the forward movements',
        ],
        correctIndex: 1,
        explanation: 'Turning the steering wheel fully at low speed maximises the turning angle, helping the car turn around within a limited road width.',
        difficulty: 'medium',
        tags: ['three-point-turn'],
      },
      {
        prompt: 'The three-point turn is also commonly referred to as:',
        choices: ['An emergency stop', 'A turn in the road', 'A roundabout exit', 'A hill start'],
        correctIndex: 1,
        explanation: '"Turn in the road" is the formal name for this manoeuvre of reversing the vehicle\'s direction using forward and reverse movements on a narrow road.',
        difficulty: 'easy',
        tags: ['three-point-turn'],
      },
      {
        prompt: 'What is the biggest way candidates lose marks on this manoeuvre, even with good steering?',
        choices: [
          'Not using the horn',
          'Skipping observation checks before each movement',
          'Taking too long overall',
          'Using first gear',
        ],
        correctIndex: 1,
        explanation: "Skipping or rushing observation before each of the three movements is graded independently, and is the most common way marks are lost even when steering is technically correct.",
        difficulty: 'medium',
        tags: ['three-point-turn', 'observation'],
      },
    ],
  },
  {
    title: 'Defensive Driving in Real Traffic Conditions',
    category: 'advanced',
    order: 2,
    durationMinutes: 20,
    summary:
      'Beyond the controlled test site, DVLA examiners also assess you in real-world traffic — where pedestrians, other drivers and unpredictable conditions matter most.',
    objective:
      'Apply defensive driving techniques in busy, unpredictable real-world traffic, including pedestrian awareness and hazard anticipation.',
    videoScript:
      "Real traffic is where all your individual skills come together under pressure. Defensive driving means always assuming the road will surprise you: a taxi might stop suddenly to pick up a passenger, a pedestrian might step out between parked cars, a motorcycle might weave between lanes. Keep scanning far ahead, not just at the car directly in front of you, so you spot developing hazards early. Maintain your three-second following gap, and extend it further in heavy traffic or poor visibility. Always yield to pedestrians at crossings — this is both a legal requirement and one of the named common failure points if ignored. Adjust your speed to match the environment: residential areas need noticeably lower speeds than main roads, and speeding there is another specifically named test failure. Above all, stay calm and predictable — sudden, aggressive manoeuvres make you dangerous even when you technically have the right of way.",
    sections: [
      {
        heading: 'Scanning ahead, not just the car in front',
        body: "Defensive drivers read the road 10-15 seconds ahead — noticing brake lights several cars ahead, pedestrians near the kerb, or a vehicle indicating from a side road — rather than only reacting to the vehicle directly in front.",
      },
      {
        heading: 'Pedestrian priority',
        body: 'Always yield to pedestrians who are crossing or clearly about to cross at a designated crossing. Failing to yield to pedestrians is explicitly named as a common cause of DVLA test failure.',
      },
      {
        heading: 'Matching speed to environment',
        body: 'Residential areas, school zones and market areas require lower speeds regardless of the posted limit, because pedestrian activity is higher and less predictable. Speeding in these zones is a named common failure point.',
      },
    ],
    keyPoints: [
      'Scan far ahead (10-15 seconds), not just the vehicle directly in front.',
      'Always yield to pedestrians at crossings.',
      'Reduce speed in residential and high-pedestrian-activity areas.',
      'Stay calm and predictable — avoid sudden, aggressive manoeuvres.',
    ],
    commonMistakes: [
      'Failing to yield to pedestrians.',
      'Speeding through residential zones.',
      'Reacting only to the car directly ahead instead of scanning further.',
      'Driving aggressively even when technically in the right.',
    ],
    dvlaRelevance:
      "Failing to yield to pedestrians and speeding in residential zones are both explicitly named as common DVLA practical test failure points during the real-traffic portion of the exam.",
    questions: [
      {
        prompt: 'Which of these is a named common DVLA test failure point related to pedestrians?',
        choices: [
          'Waving pedestrians across too often',
          'Failing to yield to pedestrians',
          'Stopping too far from a crossing',
          'Checking mirrors before a crossing',
        ],
        correctIndex: 1,
        explanation: 'Failing to yield to pedestrians is explicitly named as a common reason candidates fail the DVLA practical test.',
        difficulty: 'easy',
        tags: ['dvla-test', 'pedestrians'],
      },
      {
        prompt: 'Defensive driving encourages scanning how far ahead on the road?',
        choices: ['Only the vehicle directly in front', 'About 10-15 seconds ahead', 'Only what is visible in mirrors', 'There is no benefit to scanning ahead'],
        correctIndex: 1,
        explanation: 'Scanning roughly 10-15 seconds ahead lets you spot developing hazards — like brake lights several cars ahead — before they become urgent.',
        difficulty: 'medium',
        tags: ['defensive-driving'],
      },
      {
        prompt: 'Which is a named common DVLA test failure point related to speed?',
        choices: [
          'Driving too slowly on a highway',
          'Speeding in residential zones',
          'Using cruise control',
          'Braking too early',
        ],
        correctIndex: 1,
        explanation: 'Speeding in residential zones is explicitly listed as a common reason for practical test failure, given the higher pedestrian activity in these areas.',
        difficulty: 'easy',
        tags: ['dvla-test', 'speed-control'],
      },
      {
        prompt: 'Why should you reduce speed in residential or market areas, even if the speed limit allows more?',
        choices: [
          'It is not necessary if the limit allows it',
          'Higher pedestrian activity makes these areas less predictable and riskier',
          'Only larger vehicles need to slow down there',
          'It only matters at night',
        ],
        correctIndex: 1,
        explanation: 'Areas with high pedestrian activity are inherently less predictable, so reducing speed below the legal limit is often the genuinely safe choice.',
        difficulty: 'medium',
        tags: ['defensive-driving', 'speed-control'],
      },
      {
        prompt: 'What does "defensive driving" fundamentally assume about other road users?',
        choices: [
          'That they will always follow the rules perfectly',
          'That they might not follow the rules, so you should anticipate and prepare',
          'That pedestrians never make mistakes',
          'That only you are responsible for avoiding all accidents',
        ],
        correctIndex: 1,
        explanation: 'Defensive driving means anticipating that other road users might make mistakes or act unpredictably, and driving in a way that keeps you safe regardless.',
        difficulty: 'easy',
        tags: ['defensive-driving'],
      },
      {
        prompt: 'Why is aggressive driving dangerous even when you technically have the right of way?',
        choices: [
          'It is never actually dangerous if you are correct',
          'Sudden, aggressive manoeuvres are unpredictable to others and increase collision risk',
          'It only affects fuel consumption',
          'Right of way overrides all safety concerns',
        ],
        correctIndex: 1,
        explanation: 'Even when legally correct, sudden or aggressive manoeuvres surprise other road users, increasing the chance of a collision — predictability is part of safe driving.',
        difficulty: 'medium',
        tags: ['defensive-driving'],
      },
    ],
  },
  {
    title: 'Night Driving & Adverse Weather',
    category: 'advanced',
    order: 3,
    durationMinutes: 15,
    summary:
      'Reduced visibility at night or in heavy rain demands adjusted habits — from headlight use to increased following distance.',
    objective:
      'Adjust driving technique, speed and lighting appropriately for night-time and poor-weather conditions.',
    videoScript:
      "Night driving and heavy rain both reduce how much information your eyes can gather, so you compensate by giving yourself more time and space. At night, use your headlights on the appropriate setting — dipped in traffic or built-up areas, full beam only on unlit roads with no oncoming traffic, dipping again as soon as another vehicle approaches. Slow down enough that you can stop safely within the distance your headlights actually illuminate. In heavy rain, increase your following distance well beyond the usual three seconds, since stopping distances roughly double on a wet road. Turn on your wipers and, if visibility drops further, your fog lights or hazard lights if you must slow dramatically. Avoid sudden steering or braking inputs on a wet surface, since traction is reduced and a sudden input is more likely to cause a skid. In both conditions, the same principle applies: reduce speed, increase following distance, and make every input smoother and earlier than you would in good daylight conditions.",
    sections: [
      {
        heading: 'Headlight discipline at night',
        body: 'Use dipped headlights in traffic, built-up areas, or when an oncoming vehicle approaches. Full beam is only appropriate on unlit roads with no other traffic nearby, since it can blind oncoming drivers.',
      },
      {
        heading: 'Stopping distance in the dark',
        body: 'Your speed at night should let you stop safely within the distance your headlights actually illuminate — driving faster than that means you could hit something before you even see it.',
      },
      {
        heading: 'Wet-weather adjustments',
        body: 'Stopping distances roughly double on wet roads. Increase your following distance well beyond three seconds, use wipers appropriately, and make smoother, earlier steering and braking inputs to avoid skidding.',
      },
    ],
    keyPoints: [
      'Dip your headlights in traffic or when an oncoming vehicle approaches.',
      'Never drive faster than your headlights allow you to stop safely.',
      'Stopping distances roughly double on wet roads — increase following distance.',
      'Make smoother, earlier steering and braking inputs in poor conditions.',
    ],
    commonMistakes: [
      'Using full beam headlights when other vehicles are nearby.',
      'Maintaining the same following distance in rain as in dry conditions.',
      'Braking or steering suddenly on a wet surface.',
      'Driving at normal speed despite reduced visibility.',
    ],
    dvlaRelevance:
      'While most practical tests occur in daylight, DVLA theory questions cover night and adverse-weather rules, and examiners expect awareness of these principles when discussed during the test.',
    questions: [
      {
        prompt: 'When should you use full-beam headlights?',
        choices: [
          'Always, for maximum visibility',
          'Only on unlit roads with no oncoming traffic nearby',
          'Only in heavy rain',
          'Full beam should never be used',
        ],
        correctIndex: 1,
        explanation: 'Full beam is appropriate only on unlit roads without nearby oncoming traffic, since it can dangerously blind other drivers if used near them.',
        difficulty: 'easy',
        tags: ['night-driving'],
      },
      {
        prompt: 'A general rule for night driving speed is that you should be able to:',
        choices: [
          'Stop within the distance your headlights illuminate',
          'Drive at the same speed as during the day regardless of lighting',
          'Always drive at the posted maximum limit',
          'Ignore stopping distance since headlights compensate for everything',
        ],
        correctIndex: 0,
        explanation: 'Driving faster than the distance your headlights illuminate means you could encounter a hazard before you are able to see and react to it.',
        difficulty: 'medium',
        tags: ['night-driving'],
      },
      {
        prompt: 'Roughly how do stopping distances change on a wet road compared to dry?',
        choices: ['They stay the same', 'They roughly double', 'They are reduced by half', 'They only change for trucks'],
        correctIndex: 1,
        explanation: 'Reduced tyre grip on wet roads roughly doubles stopping distances compared to dry conditions, which is why following distance must increase.',
        difficulty: 'medium',
        tags: ['adverse-weather'],
      },
      {
        prompt: 'What kind of steering and braking inputs are safest in wet weather?',
        choices: [
          'Sudden and sharp, to react quickly',
          'Smooth and made earlier than usual',
          'It does not matter in wet weather',
          'Only braking matters; steering technique is unaffected',
        ],
        correctIndex: 1,
        explanation: 'Reduced tyre grip in wet weather means sudden inputs are more likely to cause a skid — smoother, earlier inputs keep the car under control.',
        difficulty: 'medium',
        tags: ['adverse-weather'],
      },
      {
        prompt: 'When should you dip your headlights while driving at night?',
        choices: [
          'Never, if you are on a highway',
          'When in traffic, built-up areas, or when an oncoming vehicle approaches',
          'Only if a police officer signals you to',
          'Headlights should stay off at night to save the battery',
        ],
        correctIndex: 1,
        explanation: 'Dipped headlights prevent blinding other drivers in traffic, built-up areas, or when a vehicle is approaching from the opposite direction.',
        difficulty: 'easy',
        tags: ['night-driving'],
      },
      {
        prompt: 'Why does defensive driving matter even more at night or in heavy rain?',
        choices: [
          'It matters less, since fewer people are on the road',
          'Reduced visibility and traction mean less time and space to react to hazards',
          'Defensive driving is only relevant in daylight',
          'Weather has no impact on driving safety',
        ],
        correctIndex: 1,
        explanation: 'Both reduced visibility (night) and reduced traction (rain) shrink your safety margin, so extra caution and earlier reactions compensate for that.',
        difficulty: 'medium',
        tags: ['adverse-weather', 'night-driving', 'defensive-driving'],
      },
    ],
  },
  {
    title: 'DVLA Test Day: Route Familiarity & Examiner Expectations',
    category: 'advanced',
    order: 4,
    durationMinutes: 14,
    summary:
      "Understanding exactly how the DVLA practical test is structured — timing, environment, and what the examiner is scoring — removes the biggest source of test-day anxiety.",
    objective:
      "Understand the format, timing and evaluation criteria of the real DVLA practical test so nothing on test day is a surprise.",
    videoScript:
      "By now you know the individual skills — let's put them into the context of the actual test day. The DVLA practical test typically takes between fifteen and twenty-five minutes, conducted on pre-defined routes that combine a controlled site, where manoeuvres like reverse parking and the three-point turn are assessed, with a stretch of real traffic conditions. Throughout, the examiner is scoring your starting procedures, hill starts, reverse parking, general traffic navigation, emergency stops, and three-point turns — in other words, everything we've covered across every lesson so far. This isn't a memory test of a fixed script; it's an assessment of consistent, safe habits under normal driving conditions. Arrive with your documents ready, your vehicle in good condition, and treat the test the same way you've been practising: complete your cockpit drill without rushing, apply your MSPSL routine at every junction, and if you make a small error, don't dwell on it — a single small mistake rarely fails a test on its own, but a rushed, panicked reaction to it often does.",
    sections: [
      {
        heading: 'Test format and timing',
        body: 'The DVLA practical test runs approximately 15-25 minutes on pre-defined routes, combining controlled-site manoeuvres with real-traffic driving, assessed by a DVLA-appointed instructor/examiner.',
      },
      {
        heading: 'What is actually being scored',
        body: 'Starting procedures, hill starts, reverse parking, general traffic navigation, emergency stops and three-point turns are all explicitly assessed — essentially every skill covered across this curriculum.',
      },
      {
        heading: 'Handling a small mistake mid-test',
        body: 'A single small error rarely fails a test by itself. The more damaging pattern is a panicked, rushed reaction that compounds the original mistake — staying calm and resuming your normal routine matters more than the initial slip.',
      },
    ],
    keyPoints: [
      'The practical test runs about 15-25 minutes on pre-defined routes.',
      'It combines controlled-site manoeuvres with real-traffic driving.',
      'Scored skills include starting procedures, hill starts, reverse parking, navigation, emergency stops and three-point turns.',
      "A single small mistake is recoverable — a panicked reaction to it is what often causes failure.",
    ],
    commonMistakes: [
      'Panicking after a small error and compounding it with a rushed reaction.',
      'Arriving without required documents or a vehicle in poor condition.',
      'Treating the test as a memorised script instead of consistent safe habits.',
    ],
    dvlaRelevance:
      'This lesson directly describes the real DVLA practical test structure — knowing exactly what is assessed and for how long removes uncertainty on test day.',
    questions: [
      {
        prompt: 'Approximately how long does the DVLA practical driving test take?',
        choices: ['2-5 minutes', '15-25 minutes', '1-2 hours', 'A full day'],
        correctIndex: 1,
        explanation: 'The DVLA practical test typically takes 15-25 minutes on pre-defined routes.',
        difficulty: 'easy',
        tags: ['dvla-test'],
      },
      {
        prompt: 'The DVLA practical test combines which two testing environments?',
        choices: [
          'Only a controlled test site',
          'Only real-world traffic',
          'A controlled site AND real-world traffic conditions',
          'A written exam and a video quiz',
        ],
        correctIndex: 2,
        explanation: 'The practical test combines controlled-site conditions (for manoeuvres) with real-world traffic driving.',
        difficulty: 'easy',
        tags: ['dvla-test'],
      },
      {
        prompt: 'Which of these is NOT explicitly listed as something examiners assess on the practical test?',
        choices: ['Hill starts', 'Reverse parking', 'Three-point turns', 'Parallel parking speed records'],
        correctIndex: 3,
        explanation: "Examiners assess starting procedures, hill starts, reverse parking, traffic navigation, emergency stops, and three-point turns — not a 'speed record' for any manoeuvre.",
        difficulty: 'medium',
        tags: ['dvla-test'],
      },
      {
        prompt: 'If you make a small mistake during the test, what matters most afterward?',
        choices: [
          'Immediately stopping the test',
          'Staying calm and resuming your normal, safe routine',
          'Explaining the mistake to the examiner in detail',
          'Speeding up to make up for lost time',
        ],
        correctIndex: 1,
        explanation: 'A single small mistake rarely fails a test — staying calm and continuing your normal safe habits prevents it from turning into a bigger problem.',
        difficulty: 'medium',
        tags: ['dvla-test'],
      },
      {
        prompt: 'What is the DVLA practical test fundamentally assessing?',
        choices: [
          'Memorisation of a fixed script',
          'Consistent, safe driving habits under normal conditions',
          'How fast you can complete the route',
          'Your knowledge of car mechanics',
        ],
        correctIndex: 1,
        explanation: "The test evaluates whether you consistently apply safe habits — cockpit drill, observation, manoeuvre technique — not whether you've memorised a specific script.",
        difficulty: 'medium',
        tags: ['dvla-test'],
      },
      {
        prompt: 'Who conducts the DVLA practical driving test?',
        choices: ['A random police officer', 'A DVLA-appointed instructor/examiner', 'Any licensed driver', 'The applicant\'s own driving instructor'],
        correctIndex: 1,
        explanation: 'The practical test is conducted by a DVLA-appointed instructor/examiner, assessing candidates on controlled-site and real-traffic conditions.',
        difficulty: 'easy',
        tags: ['dvla-test'],
      },
    ],
  },
  {
    title: 'Common Test Failure Points & How to Avoid Them',
    category: 'advanced',
    order: 5,
    durationMinutes: 15,
    summary:
      'A focused review of the specific mistakes that most often cause DVLA test failure in Ghana — and the precise habit that prevents each one.',
    objective:
      'Recognise the documented common DVLA test failure points and apply the specific correction for each before test day.',
    videoScript:
      "Let's finish with a direct, no-nonsense review of the mistakes that most often cause a DVLA test failure in Ghana, because avoiding these specifically will do more for your pass chance than almost anything else. One: rolling through stop signs — the fix is a complete, full stop every single time, no exceptions. Two: inadequate blind-spot checks — the fix is a genuine shoulder glance before every turn and lane change, every time. Three: stalling multiple times — the fix is smooth clutch control, practised deliberately rather than under pressure. Four: speeding in residential zones — the fix is consciously reducing speed below the limit in high-pedestrian areas. Five: failing to yield to pedestrians — the fix is treating a pedestrian at a crossing as an absolute priority, not a judgment call. Add to that the right-hand-traffic-specific errors: overtaking from the wrong side, and roundabout entry or circulation mistakes. None of these require advanced skill to fix — they require discipline and repetition until the correct habit becomes automatic, which is exactly what this entire course has been building toward.",
    sections: [
      {
        heading: 'The five core failure points',
        body: '1) Rolling through stop signs. 2) Inadequate blind-spot checks. 3) Stalling multiple times. 4) Speeding in residential zones. 5) Failing to yield to pedestrians. Each has one specific, repeatable fix rather than a vague "be more careful".',
      },
      {
        heading: 'Right-hand-traffic-specific errors',
        body: 'Overtaking from the wrong (right) side, and roundabout entry/circulation mistakes, are additional errors specific to right-hand-traffic driving that catch out learners who otherwise know the rules.',
      },
      {
        heading: 'Turning knowledge into habit',
        body: "Knowing these failure points intellectually is not the same as having fixed the habit. The goal of every previous lesson in this course was to build the specific counter-habit for each of these points so it happens automatically under test pressure.",
      },
    ],
    keyPoints: [
      'Always come to a complete stop at Stop signs — no exceptions.',
      'Always perform a genuine shoulder check, not just a mirror glance.',
      'Master smooth clutch control through deliberate practice.',
      'Consciously reduce speed in residential/high-pedestrian areas.',
      'Treat pedestrians at crossings as an absolute priority.',
    ],
    commonMistakes: [
      'Believing knowledge of a rule is the same as having the habit under pressure.',
      'Practising manoeuvres only when calm, never under simulated pressure.',
      'Focusing only on manoeuvres and neglecting basic habits like stop signs and pedestrian priority.',
    ],
    dvlaRelevance:
      'This lesson is a direct summary of the specific, documented reasons candidates fail the DVLA practical test in Ghana — mastering the fix for each is the single highest-leverage test preparation activity.',
    questions: [
      {
        prompt: 'Which of the following is one of the five core documented DVLA test failure points?',
        choices: ['Using indicators correctly', 'Rolling through stop signs', 'Wearing a seatbelt', 'Checking mirrors regularly'],
        correctIndex: 1,
        explanation: 'Rolling through stop signs — not making a complete stop — is one of the specific, documented common failure points on the Ghana DVLA practical test.',
        difficulty: 'easy',
        tags: ['dvla-test'],
      },
      {
        prompt: 'What is the specific fix for "inadequate blind-spot checks"?',
        choices: [
          'Rely only on mirrors',
          'A genuine shoulder glance before every turn and lane change',
          'Drive more slowly at all times',
          'Use only the interior mirror',
        ],
        correctIndex: 1,
        explanation: 'The fix for inadequate blind-spot checks is a genuine physical shoulder glance every time, since mirrors alone cannot show everything.',
        difficulty: 'medium',
        tags: ['dvla-test', 'blind-spots'],
      },
      {
        prompt: 'Which two errors are specifically tied to right-hand-traffic driving?',
        choices: [
          'Wearing a seatbelt and adjusting mirrors',
          'Overtaking from the wrong side, and roundabout entry/circulation mistakes',
          'Speeding on highways and using headlights',
          'Stalling and reverse parking',
        ],
        correctIndex: 1,
        explanation: 'Overtaking from the right (instead of the left) and roundabout entry/circulation mistakes are specifically tied to Ghana\'s right-hand-traffic system.',
        difficulty: 'medium',
        tags: ['dvla-test', 'right-hand-traffic'],
      },
      {
        prompt: 'Why is simply "knowing" a rule not enough to pass reliably?',
        choices: [
          'Rules do not matter on the actual test',
          'Under test pressure, only a practised, automatic habit reliably shows up in behaviour',
          'Examiners do not check for rule knowledge',
          'Knowing the rule is always sufficient',
        ],
        correctIndex: 1,
        explanation: 'Under the pressure of a real test, only a deeply practised habit reliably translates into correct behaviour — intellectual knowledge alone often is not enough.',
        difficulty: 'medium',
        tags: ['dvla-test'],
      },
      {
        prompt: 'What is the recommended fix for stalling multiple times?',
        choices: [
          'Avoid manual cars entirely',
          'Deliberately practising smooth clutch control, not just under pressure',
          'Always start in second gear',
          'Keep the handbrake engaged while driving',
        ],
        correctIndex: 1,
        explanation: 'Stalling is best addressed through deliberate, repeated clutch control practice so smooth control becomes automatic rather than something attempted only under test pressure.',
        difficulty: 'medium',
        tags: ['dvla-test', 'clutch-control'],
      },
      {
        prompt: 'How should you treat a pedestrian waiting at a crossing?',
        choices: [
          'As an absolute priority, always yielding to them',
          'As optional, depending on how busy you are',
          'Only yield if they wave at you',
          'Pedestrians have no priority over vehicles',
        ],
        correctIndex: 0,
        explanation: 'Pedestrians at a crossing should be treated as an absolute priority — failing to yield to pedestrians is a named common cause of test failure.',
        difficulty: 'easy',
        tags: ['dvla-test', 'pedestrians'],
      },
    ],
  },
];

module.exports = lessons;
