export interface ProjectData {
  slug: string;
  intro: {
    heroQuestion: {
      light: string;
      bold: string;
    };
    bodyText: (string | { text: string; hidden?: boolean })[];
  };
  media: {
    heroVideo: string;
  };
  projectInfo: {
    title: {
      bold: string;
      regular: string;
    };
    description: string;
  };
  sections: ProjectSection[];
}

export type ProjectSection =
  | {
      type: 'standard';
      wrapperClass?: string;
      title: string;
      subtitle: string;
      body: string;
      image?: string; // e.g., handGestureImage
    }
  | {
      type: '3-col-text';
      wrapperClass?: string;
      title: string;
      subtitle: string;
      columns: { title: string; body: string }[];
    }
  | {
      type: 'visuals';
      title: string;
      subtitle: string;
      body: string;
    }
  | {
      type: 'video-grid';
      title: string;
      subtitle: string;
      items: {
        videoSrc: string;
        title: string;
        desc: string; // HTML support needed for <br/>
        codeBlocks: string[]; // Array of code strings
      }[];
    }
  | {
      type: 'tech-stack';
      title: string;
      subtitle: string;
      categories: { title: string; items: string[] }[];
    }
  | {
      type: 'system-architecture';
      title: string;
      subtitle: string;
      // Defines content for the specific SysArch diagram
      input: {
        title: string;
        body: string;
        videoSrc: string;
        width?: number; // Optional image width
        height?: number; // Optional image height
      };
      boxes: {
        preprocessing: {
          title: string;
          subtitle: string;
          items: { title: string; desc: string }[];
        };
        gesture: {
          title: string;
          subtitle: string;
        };
        main: {
          title: string;
          subtitle: string;
          desc: string;
        };
        choir: {
          title: string;
          subtitle: string;
          box1: { title: string; content: string };
          box2: { title: string; content: string[] }; // Array for separate p tags or lines
        };
        actions: { title: string; subtitle: string; content: string }[]; // 4 action boxes
      };
      output: {
        videoSrc: string;
        githubLink: string;
        width?: number; // Optional image width
        height?: number; // Optional image height
      };
    }
  | {
      type: 'magritte-image';
      src: string;
      alt: string;
      wrapperClass?: string;
      width?: number;
      height?: number;
    }
  | {
      type: 'collaboration';
      mainTitle: string;
      mainSubtitle: string;
      chapters: {
        num: string;
        title: string;
        subtitle: string;
        caseText: string;
        bodyText: string[]; // Paragraphs
        marginTop?: string;
        bodyWidth?: string;
        additionalCase?: {
          text: string;
        };
        caseStudyDetails?: {
          title: string;
          type?:
            | 'columns'
            | 'wide-block'
            | 'wide-block-right'
            | 'wide-columns'
            | 'prototype-video'
            | 'sprite-sheet'; // differentiate layouts
          items?: {
            box: { title: string; content: string };
            text: { title: string; content: string };
          }[];
          // For wide-block layout
          mainBox?: {
            title: string;
            // Split content
            leftContent: string;
            rightContent: string;
          };
          subTexts?: { title: string; content: string }[];
          // For wide-columns layout
          leftBox?: { title: string; content: string };
          rightBox?: { title: string; content: string };
          advantages?: { title: string; items: string[] };
          // For prototype-video layout
          videoSrc?: string;
          codeLeft?: string;
          codeRight?: string;
          issues?: { title: string; items: string[] };
          // For sprite-sheet layout
          imageSrc?: string;
          imageDimensions?: { width: number; height: number };
          descriptions?: string[];
          code?: string;
        }[];
        dialogues: DialogueBlock[];
      }[];
    };

// End of Interface Definitions

export interface DialogueBlock {
  type: 'box-code' | 'box-only' | 'code-box' | 'code-only'; // Layout type
  label: 'Me' | 'AI';
  alignment: 'left' | 'right'; // Main element alignment

  // Box Content
  boxItems?: { title: string; body: string }[];

  // Code Content
  codeBlocks?: {
    code?: string;
    split?: boolean; // if true, code is split L/R (specific to Magritte)
    codes?: string[]; // for split code
  }[];
}

export const projects: ProjectData[] = [
  {
    slug: 'magritte',
    intro: {
      heroQuestion: {
        light: 'Is touch on a screen',
        bold: 'the best way to communicate?',
      },
      bodyText: [
        'Having a physical form can be a risk; it restricts an object’s potential to a single, fixed function. To transcend this limitation, physical entities (hardware) have merged with the virtual entities: computers (software).',
        {
          text: 'It is remarkable how many possibilities the iPhone—a simple rectangular block—unlocked by merging with the computer.',
          hidden: true,
        },
        'As computers rapidly evolved into Artificial Intelligence, now this intelligence has begun to redefine the very physical structures that once served as its container.',
        'While AI changes the definition of a product and reshapes how we interact with it, is touch on a screen still the best way to communicate with a computer?',
      ],
    },
    media: {
      heroVideo: 'https://youtube.com/shorts/Moi6y_LImVk',
    },
    projectInfo: {
      title: {
        bold: 'HAND-GESTURE-DRIVEN',
        regular: 'AUDIO CONTROL SYSTEM',
      },
      description:
        'A hand-gesture-based interface that provides independent control over the separate multitrack stems—Vocal, Beat, and Chords—of a selected audio source. Developed through an integrated Human-AI workflow of direction and execution.',
    },
    sections: [
      {
        type: 'standard',
        wrapperClass: 'whyHandGesturesSection',
        title: 'Why Hand-Gestures?',
        subtitle: 'Spatial Interaction',
        body: 'AI will inhabit entire physical spaces rather than being confined to a single device. In the era of Ambient Computing, the expanded scale of HCI necessitates non-contact interaction to ensure user freedom and seamless UX connectivity across various devices.',
        image: 'handGestureImage',
      },
      {
        type: '3-col-text',
        wrapperClass: 'whyControlAudioSection',
        title: 'Why Control Audio with Hand-Gestures?',
        subtitle: 'Superiority in Audio Interface',
        columns: [
          {
            title: 'Simultaneous Multi-Input',
            body: 'Real-time musical control, such as DJing or conducting, often involves performing more than one operation at once. Using both hands provides a powerful advantage for concurrent multi-input.',
          },
          {
            title: 'Precision Control',
            body: 'Elements like tempo and volume require high-precision adjustments. The human hand is the most refined and delicate tool for such precise modulation.',
          },
          {
            title: 'Bodily Expression',
            body: 'Music and dance are inseparable; hand gestures are a fundamental form of bodily expression. The body, moving freely within a set of rules, becomes a dance in itself.',
          },
        ],
      },
      {
        type: 'visuals',
        title: 'Visuals',
        subtitle: 'Choir and Conductor',
        body: 'I envisioned gestural control as conducting an orchestra, aiming for users to feel they are leading a choir.',
      },
      {
        type: 'video-grid',
        title: 'How to Control',
        subtitle: 'Operational manual',
        items: [
          {
            title: 'Volume',
            desc: 'pinch gesture with vertical movement<br />in the desired stem area.',
            videoSrc: 'https://youtube.com/shorts/j1fwl1WMeAA',
            codeBlocks: [
              `const pinchState = {
  Left: { active: false, lastAt: 0, zoneAtOn: null, lastTipY: null },
  Right: { active: false, lastAt: 0, zoneAtOn: null, lastTipY: null },
};

function updatePinch(handed, pinch, cxNorm, sm) {
  if (handPoseState[handed].label === 'FIST') return;
  if (handed === 'Right') {
    const lastOpenAt = handPoseState[handed]?.lastOpenAt || 0;
    if (performance.now() - lastOpenAt < 1000) return; 
  }

  //pinchState가 active이면 볼륨 조절 실행
  if (pinchState[handed]?.active) {
    //핀 손가락이 2개 이하면 핀치 아님
    const scores = computeFingerOpenScores(sm);
    const openFlags = scores.map((s) => s >= 0.5);
    const openCount = openFlags.reduce((a, b) => a + (b ? 1 : 0), 0);
    if (openCount <= 2) {
      pinchState[handed].active = false;
      return;
    }
    applyPinchVolume(handed, sm);
  }

  if (!pinchState[handed]) pinchState[handed] = { active: false, lastAt: 0 };
  const S = pinchState[handed];

  if (!S.active && pinch >= CFG.pinchOn) {
    S.active = true;
    S.zoneAtOn = classifyZoneByXNorm(cxNorm);
    S.lastTipY = sm?.[8]?.y ?? null;

    return;
  }`,
              `  if (S.active && pinch <= CFG.pinchOff) {
    S.active = false;
    S.zoneAtOn = null;
    S.lastTipY = null;

    const color = handed === 'Left' ? 'color:#1DBBBB;';

    console.log(\`%c\${handed} pinch OFF\`, color);
  }
}






// --------------------------- Db volume control ---------
const zoneVolumes = { Left: 0, Center: 0, Right: 0 };

function applyPinchVolume(handed, sm) {
  const S = pinchState[handed];
  const tipY = (2 * sm[4].y + sm[8].y) / 3; 
  const s = handScale(sm) || 1e-6;

  if (S.lastTipY === null) {
    S.lastTipY = tipY;
    return;
  }

  const dyNorm = (S.lastTipY - tipY) / s; //손 크기 대비 y 이동량

  if (Math.abs(dyNorm) < CFG.moveDeadband) {
    S.lastTipY = tipY;
    return;
  }`,
            ],
          },
          {
            title: 'Seek forward/backward',
            desc: 'right-hand wrist-twist with thumb and little finger extended.',
            videoSrc: 'https://youtube.com/shorts/Jh6BlNldvOE',
            codeBlocks: [
              `function wrapPi(a) {
  if (a > Math.PI) a -= 2 * Math.PI;
  if (a < -Math.PI) a += 2 * Math.PI;
  return a;
}

const yawJogState = {
  Right: { active: false, lastTheta: null, lastT: 0, velEma: 0, offSince: 0 },
};

let shakaing = false;

function detectYawJog(handed, sm) {
  if (handed !== 'Right') return;
  if (pinchState?.Right?.active) return; // 핀치 중이면 배제

  // 샤카 게이트: 엄지/새끼 펴짐, 나머지 3개 접힘
  const scores = computeFingerOpenScores(sm);
  const open = scores.map((s) => s >= 0.5);
  const shaka = open[0] && open[4] && !open[1] && !open[2] && !open[3];

  if (!shaka) {
    // 게이트 해제 시 상태만 정리
    const ST = yawJogState.Right;
    // 기준 재설정(점프 방지)
    const c = sm[9],
      v = { x: sm[4].x - c.x, y: sm[4].y - c.y };
    ST.lastTheta = Math.atan2(v.y, v.x);
    ST.lastT = performance.now();
    ST.velEma = 0;
    ST.offSince = 0;`,
              `  const c = sm[9];
  const v = { x: sm[4].x - c.x, y: sm[4].y - c.y };
  const s = handScale(sm) || 1e-6;
  const rNorm = Math.hypot(v.x, v.y) / s;
  if (rNorm < CFG.yawJog.minRad) return;

  const theta = Math.atan2(v.y, v.x);
  const now = performance.now();
  const ST = yawJogState.Right;

  const dt = Math.max(1e-3, (now - ST.lastT) / 1000);
  const dth = wrapPi(theta - ST.lastTheta);
  let omega = dth / dt; //각속도 rad/s (반시계 +, 시계 -)
  if (CFG.yawJog.flipDir) omega = -omega; // 방향 뒤집기 옵션

  // 각속도 EMA
  const a = CFG.yawJog.emaAlpha;
  ST.velEma = ST.velEma === 0 ? omega : ST.velEma * (1 - a)

  // 데드밴드 & 속도 맵핑
  let rate =
    Math.abs(ST.velEma) < CFG.yawJog.deadbandVel
      ? 0
      : CFG.yawJog.kVel * ST.velEma;
  rate = Math.max(CFG.yawJog.minRate, Math.min(CFG.yaw
  shakaing = true;

  if (rate !== 0) {
    try {
      if (window.opener && !window.opener.closed) {
        window.opener.postMessage(`,
            ],
          },
          {
            title: 'Previous/next track',
            desc: 'right-hand horizontal movement',
            videoSrc: 'https://youtube.com/shorts/ARux1GRyNZk',
            codeBlocks: [
              `function detectSwipe(handed, sm) {
  if (handed !== 'Right') return;
  const pose = handPoseState?.Right?.label || 'OPEN';
  if (pose === 'FIST') return;
  if (pinchState?.Right?.active) return;

  const s = handScale(sm) || 1e-6;
  const x = (sm[5].x + sm[9].x) / 2;
  const y = (sm[5].y + sm[9].y) / 2;
  const now = performance.now();

  const ST = swipeState.Right;
  if (ST.lastX == null) {
    ST.lastX = x;
    ST.lastY = y;
    ST.lastT = now;
    ST.vxEma = 0;
    return;
  }

  const dt = Math.max(1e-3, (now - ST.lastT) / 1000); // s
  const dx = (x - ST.lastX) / s;
  const dy = (y - ST.lastY) / s;
  const vx = dx / dt;

  const a = CFG.swipe.emaAlpha;
  const vxEma = ST.vxEma === 0 ? vx : ST.vxEma * (1 - a) + vx * a;
  ST.vxEma = vxEma;

  // 2) ARMING
  if (ST.phase === 'ARMING') {
    // 게이트 깨지면 리셋
    if (!speedGate || pose === 'FIST' || pinchState?.Right?.active) {
      ST.phase = 'IDLE';
      ST.lastX = x;
      ST.lastY = y;
      ST.lastT = now;
      return;
    }
`,
              `// 수직 움작임 과하면 리셋
    if (Math.abs(ST.sumDy) > CFG.swipe.yLimit) {
      ST.phase = 'IDLE';
      ST.lastX = x;
      ST.lastY = y;
      ST.lastT = now;
      return;
    }

    // 시간 초과하면 라셋
    if (now - ST.armedAt > CFG.swipe.armingWindowMs) {
      ST.phase = 'IDLE';
      ST.lastX = x;
      ST.lastY = y;
      ST.lastT = now;
      return;
    }

    if (Math.abs(ST.sumDx) >= CFG.swipe.dMin) {
      // 방향 결정
      let dir = ST.sumDx < 0 ? 'LEFT' : 'RIGHT';
      if (CFG.swipe.flipDir) dir = dir === 'LEFT' ? 'RIGHT' : 'LEFT';
      if (dir === 'LEFT') {
        console.log('%cNext Track', 'color:#4CAF50;font-weight:bold;');
      } else {
        console.log('%cPrevious Track', 'color:#FF9800;font-weight:bold;');
      }

      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(
            {
              type: 'swipe',
              value: dir === 'LEFT' ? 'nextTrack' : 'previousTrack',
            },
            '*'
          );
        }
      }
`,
            ],
          },
          {
            title: 'Play/Pause',
            desc: 'right-hand fist/open',
            videoSrc: 'https://youtube.com/shorts/F04cIGWnhxI',
            codeBlocks: [
              `function palmCenter(lms) {
  const idx = [0, 5, 9, 13, 17];
  let x = 0,
    y = 0;
  for (let i = 0; i < idx.length; i++) {
    x += lms[idx[i]].x;
    y += lms[idx[i]].y;
  }
  return { x: x / idx.length, y: y / idx.length };
}

function angleAt(a, b, c) {
  // 각 b (°)
  const v1 = { x: a.x - b.x, y: a.y - b.y };
  const v2 = { x: c.x - b.x, y: c.y - b.y };
  const n1 = Math.hypot(v1.x, v1.y) || 1e-6;
  const n2 = Math.hypot(v2.x, v2.y) || 1e-6;
  const cos = (v1.x * v2.x + v1.y * v2.y) / (n1 * n2);
  return (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;
}

function map01(v, lo, hi) {
  if (hi === lo) return 0.5;
  const t = (v - lo) / (hi - lo);
  return Math.max(0, Math.min(1, t));
}

function computeFingerOpenScores(sm) {
  // Mediapipe 인덱스 체인: [MCP, PIP, TIP] 사용(엄지는 [2,3,4])
  const defs = [
    { m: 2, p: 3, t: 4 }, //Thumb
    { m: 5, p: 6, t: 8 }, // Index
    { m: 9, p: 10, t: 12 }, // Middle
    { m: 13, p: 14, t: 16 }, // Ring
    { m: 17, p: 18, t: 20 }, // Pinky
  ];

  const center = palmCenter(sm);
  const s = handScale(sm) || 1e-6;`,
              `  if (openCount === 0) {
    // 모두 굽힘
    nextLabel = 'FIST';
  } else if (openCount >= 4) {
    // 대부분 펴짐
    nextLabel = 'OPEN';
  }

  if (nextLabel !== S.label) {
    S.label = nextLabel;

    if (S.label === 'FIST') {
      // 메인 창으로 정보 전송
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({ type: 'fistOpen', state: 'FIST' }, '*');
        }


      } catch (e) {
        console.warn('postMessage failed', e);
      }

      console.log('%cPause', 'color:#FF0000;font-weight:bold;');
    } else if (S.label === 'OPEN') {
      S.lastOpenAt = performance.now();

      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({ type: 'fistOpen', state: 'OPEN' }, '*');
        }
      } catch (e) {
        console.warn('postMessage failed', e);
      }

      console.log('%cPlay', 'color:#FF0000;font-weight:bold;');
    }
  }
  return S.label;`,
            ],
          },
        ],
      },
      {
        type: 'tech-stack',
        title: 'Technical Stack',
        subtitle: 'Languages, Software, and AI Models',
        categories: [
          {
            title: 'Development',
            items: ['JavaScript', 'Tone.js', 'MediaPipe', 'HTML/CSS'],
          },
          {
            title: 'AI Model',
            items: ['Ultimate Vocal Remover (UVR)', 'ChatGPT'],
          },
          {
            title: 'Design & Editor',
            items: ['Figma', 'Photoshop', 'premiere pro', 'VS Code'],
          },
        ],
      },
      {
        type: 'system-architecture',
        title: 'System Architecture',
        subtitle: 'Logical Flow and Data Structure',
        input: {
          title: 'Input',
          body: 'Receiving real-time hand<br />position data via MediaPipe.',
          videoSrc: '/input.jpg',
          width: 1172,
          height: 584,
        },
        boxes: {
          preprocessing: {
            title: 'Data Preprocessing',
            subtitle: 'Mapping Positions to Coordinates',
            items: [
              {
                title: '1. Hand Tracking',
                desc: 'Mapping finger joints into 21 distinct landmark coordinates from the camera feed.',
              },
              {
                title: '2. Data Smoothing',
                desc: 'Stabilizing hand movements using the Exponential Moving Average (EMA) algorithm to reduce jitter.',
              },
              {
                title: '3. Hand Size Normalization',
                desc: 'Adjusting for relative hand size variations based on the distance from the camera.',
              },
            ],
          },
          gesture: {
            title: 'Gesture Interpretation & Intent Recognition',
            subtitle: 'Translating Coordinates into Commands',
          },
          actions: [
            {
              title: 'Fist/Open',
              subtitle: 'Pause and Play',
              content:
                "<p>1. Calculating the number and flexion angles of extended fingers.</p><div style=\"display:flex;justify-content:space-between;width:80%\"><span>If <strong>5 fingers bent</strong><br />then 'Fist'</span><span>If <strong>4 or more fingers extended</strong><br />then 'Open'</span></div><br /><p>2. 'Fist' to PAUSE , 'OPEN' to 'Play'.</p><br /><br />",
            },
            {
              title: 'Pinch UP/Down',
              subtitle: 'Volume',
              content:
                "<p>1. Detection.</p><p>If <span style=\"font-family:'Helvetica', sans-serif\">dist(thumb, index) &lt; 0.3s</span> (where s is the reference palm length) then 'Pinch'</p><br /><p>2. Converting the Y-axis displacement into volume levels (dB).</p><p>* Filtering out micro-jitters by only registering movement that exceeds a predefined threshold.</p>",
            },
            {
              title: 'Swipe',
              subtitle: 'Track Navigation',
              content:
                "<p>1. Calculating X-axis movement speed (Displacement over Time).</p><p>If <strong>velocity &gt; Threshold</strong><br />then <span style=\"font-family:'Helvetica', sans-serif\">'Swipe'</span></p><br /><p>2. 'Swipe Left' to 'Next Track', 'Swipe Right' to 'Previous Track'.</p><p>* Prevents accidental continuous track skipping by implementing a temporary input lockout (Cooldown phase).</p>",
            },
            {
              title: 'Wrist Twist',
              subtitle: 'Playback Rate',
              content:
                '<p>1. Shaka Gesture Detection.</p><br /><p>2. Converting the Y-axis displacement into volume levels (dB).</p><p>Angle Calculation (θ)<br />theta = atan2(y_thumb - y_center, x_thumb - x_center)</p><p>Angular Velocity (ω)<br />omega = (theta_current - theta_prev) / delta_t</p>',
            },
          ],
          main: {
            title: 'Communication & Audio Control',
            subtitle: 'Mapping Commands to Audio Parameters',
            desc: 'Mapping audio-related parameters received as JSON signals from hands.js to functional engine parameters.',
          },
          choir: {
            title: 'Visualization & Feedback',
            subtitle: 'Mapping Audio Parameters to Visual Responses',
            box1: {
              title: 'Synchronizing Animation with Music BPM',
              content:
                'Converting current music BPM and<br />playback seconds into the target frame<br />index for synchronization.',
            },
            box2: {
              title: 'Synchronizing Audio Volumes with Visual Opacity Levels',
              content: [
                'Implementing Linear Interpolation (LERP)<br />to calculate the smooth transition between<br />target and current opacity levels.',
                'Val_new = Val_current + (Val_target - Val_current) * 0.1',
              ],
            },
          },
        },
        output: {
          videoSrc: '/output.jpg',
          width: 1745,
          height: 870,
          githubLink:
            'https://github.com/jyoon-57/hand-gesture-driven_audio_control_system',
        },
      },
      {
        type: 'magritte-image',
        src: '/blue_magritte.jpg',
        alt: 'Blue Magritte',
        width: 3840,
        height: 2856,
      },
      {
        type: 'collaboration',
        mainTitle: 'How I Collaborated with AI',
        mainSubtitle: 'through a Partnership',
        chapters: [
          {
            num: '1',
            title: 'Organic Collaboration between Humans and AI',
            subtitle: 'While Humans Imagine and AI Realizes.',
            caseText:
              'Case:<br />Designing a data pipeline to translate Y-axis variation<br />of the index finger (Landmark 8) into audio volume<br />(dB) upon pinch gesture detection.',
            bodyText: [
              'AI possesses boundless execution power, which paradoxically means that misguided human instructions can lead to the mass production of flawed outcomes. Therefore, humans must act as directors, continuously steering the AI to ensure it remains on the right track.',
              'To achieve this, the relationship must evolve beyond a hierarchical command-and-response model into a cyclical structure. In this framework, continuous dialogue and mutual verification drive the co-evolution of the final output.',
            ],
            dialogues: [
              {
                type: 'code-box',
                label: 'Me',
                alignment: 'right',
                codeBlocks: [
                  {
                    code: `// [hands.js] Restructured 'updatePinch' to ingest 'sm'
// Ingests 'sm' (smoothed coordinate data) as an argument
function updatePinch(handed, pinch, cxNorm, sm) { 
  // ... (omitted)
  
  // Invokes the decoupled volume control function when pinch state is active
  if (pinchState[handed]?.active) {
    // ... (Logic to verify finger count)
    applyPinchVolume(handed, sm); // Delegates complex logic to an external function
  }
  
  // ... (State management logic for Pinch ON/OFF transitions)
}

// [hands.js] Externalized Logic
function applyPinchVolume(handed, sm) {
  const S = pinchState[handed];
  
  // Centralizes core logic for calculating Y-axis displacement
  const tipY = (2 * sm[4].y + sm[8].y) / 3; 
  
  // ... (Logic for Delta calculation and Volume Mapping)
}`,
                  },
                  {
                    code: `// [hands.js] The 'handScale' Function (Euclidean Distance 0 to 9)
function handScale(landmarks) {
  const a = landmarks[0], // Wrist
    b = landmarks[9];     // Middle Finger Base
  return dist(a, b) || 1e-6;
}`,
                  },
                ],
                boxItems: [
                  {
                    title:
                      '1. Design Data Pipeline for Pinch Coordinate Calculation',
                    body: 'Restructured the updatePinch function to ingest coordinate data (sm) from higher- order functions—data it did not originally possess—to calculate the precise movement of the pinched hand.<br /><br />Streamlined the system architecture by externalizing complex Y-axis displacement logic into a dedicated function (applyPinchVolume).',
                  },
                  {
                    title:
                      '2. Design Normalization Algorithm for Depth-Based Scale Compensation',
                    body: 'Developed the handScale function to calculate the Euclidean distance between the wrist (Landmark 0) and the base of the middle finger (Landmark 9).<br /><br />Designed a universal normalization algorithm to be shared across all gesture detection functions (Pinch, Swipe, Jog) within hands.js, resolving scaling errors caused by varying hand depths.',
                  },
                ],
              },
              {
                type: 'box-code',
                label: 'AI',
                alignment: 'left',
                boxItems: [
                  {
                    title: '1. Algorithmic Feedback',
                    body: "Suggested and implemented an algorithm to reflect transformed zoneVolumes[zone] values onto the respective channel volumes using window.addEventListener('zoneVolume', ...).",
                  },
                  {
                    title: '2. Code Execution',
                    body: 'Pinch ON:<br />Fixed zoneAtOn and lastTipY to establish a stable reference point.<br /><br />Pinch Maintain:<br />Normalized Y-displacement via handScale and updated zoneVolumes within a clamped -10 to +10 dB range.<br /><br />Pinch OFF:<br />Reset lastTipY to null to prevent value jumps during the next activation.',
                  },
                ],
                codeBlocks: [
                  {
                    code: `// [hands.js] Real-Time Data Transmission Loop
function applyPinchVolume(handed, sm) {
  // ... (Volume calculation logic)

  // Transmit the calculated Zone and dB values to the main window
  try {
    if (window.opener && !window.opener.closed) {
      window.opener.postMessage(
        { type: 'pinchVolume', zone, db: next },
        '*' // Explicitly allows communication with the opener
      );
    }
  } catch (e) {
    console.warn('postMessage failed', e);
  }
}`,
                  },
                  {
                    split: true,
                    codes: [
                      `// [hands.js] Pinch Maintain: Depth-Normalized Volume Control
function applyPinchVolume(handed, sm) {
  const S = pinchState[handed];

  const tipY = (2 * sm[4].y + sm[8].y) / 3;
  const s = handScale(sm) || 1e-6;
  const dyNorm = (S.lastTipY - tipY) / s; 

  const zone = S.zoneAtOn;
  const prev = zoneVolumes[zone];
  
  const next = Math.max(
    CFG.volMinDb, 
    Math.min(CFG.volMaxDb, prev + dyNorm * CFG.dbPerUnit)
  );

  zoneVolumes[zone] = next; 
  S.lastTipY = tipY; 
}`,
                      `// [hands.js] Pinch State Machine
function updatePinch(handed, pinch, cxNorm, sm) {
  const S = pinchState[handed];

  // Pinch ON: Initialize Reference Point
  if (!S.active && pinch >= CFG.pinchOn) {
    S.active = true;
    S.zoneAtOn = classifyZoneByXNorm(cxNorm); 
    S.lastTipY = sm?.[8]?.y ?? null; 
    return;
  }

  // Pinch OFF: Reset State
  if (S.active && pinch <= CFG.pinchOff) {
    S.active = false;
    S.zoneAtOn = null;
    S.lastTipY = null; 
  }
}`,
                    ],
                  },
                ],
              },
              {
                type: 'code-box',
                label: 'Me', // Debugging section
                alignment: 'right', // Was Center in code but structure looks like Me Code Left, Box Right. Wait, debugging section in code is Code Left, Box Right.
                // The label "Me" is on the right in code.
                // Let's call it right aligned group.
                codeBlocks: [
                  {
                    code: `function applyPinchVolume(handed, sm) {
  // ... (Previous logic: Get current tip position & Hand scale)

  const dyNorm = (S.lastTipY - tipY) / s;

  // ... (Logic: Apply Deadband & Update zoneVolumes) ...
}`,
                  },
                ],
                boxItems: [
                  {
                    title: 'AI-Generated Code Review & Debugging',
                    body: 'Identified a missing reference point update following delta calculation and integrated <span style="font-family:Consolas, monospace">S.lastTipY = tipY;</span> to ensure continuous tracking accuracy.<br /><br />Resolved a critical logic error where a static reference point caused minor movements to accumulate identical deltas every frame, leading to uncontrolled volume spikes.',
                  },
                ],
              },
              {
                type: 'box-only',
                label: 'AI',
                alignment: 'left',
                boxItems: [
                  {
                    title: '1. Final Code Review',
                    body: 'Verified the operation of updatePinch(handed, pinch, cxNorm, sm) and conducted code stability testing.',
                  },
                  {
                    title: '2. Suggesting Additional Features',
                    body: 'Proposed debugging utilities.<br />Recommended displaying Left, Center, and Right boundaries on-screen.',
                  },
                ],
              },
            ],
          },
          {
            num: '2',
            title: 'Top-Down Learning',
            subtitle: 'Goal-Oriented Learning Fueled by Necessity',
            marginTop: '63rem', // 630px
            bodyWidth: '54.6rem', // 546px
            bodyText: [
              'My learning process was a series of deep dives with AI, triggered by the specific technical challenges and knowledge gaps encountered throughout the project.',
              'This top-down approach is fueled by immediate necessity, which creates a powerful and focused drive to learn. By bypassing extraneous theory to prioritize direct problem-solving, learning efficiency is dramatically maximized. Through real-time application and iterative trial and error, complex concepts are fully mastered and internalized as they are needed.',
            ],
            caseText:
              'Case:<br />Learning and Designing the Fist Detection Algorithm',
            additionalCase: {
              text: 'Various identification techniques were studied through top-down Q&A with AI, leading to the design of an optimal logic that ensures both stability and response speed.',
            },
            dialogues: [],
            caseStudyDetails: [
              {
                title: '1. Learning Four Major Approaches to Fist Detection',
                items: [
                  {
                    box: {
                      title: 'Distance-Based:',
                      content:
                        'Measures the distance between the palm center and fingertips. This method requires normalization based on hand scale',
                    },
                    text: {
                      title: 'Auxiliary:',
                      content:
                        'Utilizes fingertip height (y-value) or total hand area (Convex Hull). These methods are vulnerable to rotation or side-view profiles.',
                    },
                  },
                  {
                    box: {
                      title: 'Angle-Based:',
                      content:
                        'Calculates the included angles between finger joints (MCP-PIP-DIP). This provides more precise measurement than distance-based methods.',
                    },
                    text: {
                      title: 'Stabilization Techniques:',
                      content:
                        'Learned techniques to prevent data jittering by applying frame smoothing (EMA) and hysteresis.',
                    },
                  },
                ],
              },
              {
                title:
                  '2. Designing the Fist Detection Algorithm Based on Learned Content',
                type: 'wide-block-right',
                mainBox: {
                  title: 'Adopting Hybrid Detection Logic:',
                  leftContent:
                    'Designed a composite algorithm that performs primary detection via "Normalized Tip-to-Palm Distance" and secondary correction through "Joint Angles (Curl)".',
                  rightContent:
                    "Used the joint angle method to compensate for errors in distance-based measurements caused by the hand's angle relative to the camera screen.",
                },
                subTexts: [
                  {
                    title: 'Strict FIST Criteria:',
                    content:
                      "Strengthened the conditions to recognize a 'FIST' only when all five fingers are clearly not in an 'open' state to prevent accidental triggers.",
                  },
                  {
                    title: 'Immediate Responsiveness:',
                    content:
                      'Unlike typical implementations, the logic confirms the label if a fist is detected for even a single frame. This was implemented to allow for music control at the exact desired timing without delay.',
                  },
                  {
                    title: 'Applying Smoothing and Hysteresis:',
                    content:
                      'Applied hysteresis to the transition zones (Open <--> Fist) to prevent malfunctions caused by data noise.',
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: 'magritte-image',
        src: '/pigeon.jpg',
        alt: 'Pigeon',
        wrapperClass: 'pigeonSection',
        width: 1920,
        height: 960,
      },
      {
        type: 'collaboration',
        mainTitle: '',
        mainSubtitle: '',
        chapters: [
          {
            num: '3',
            title: 'Narrowing the Candidate Solutions',
            subtitle:
              'Quickly Reducing the Boundary of Possible Solution Candidates',
            bodyText: [
              'Prototypes of potential solutions were immediately developed and tested. This approach allowed for the reduction of meaningless calculations and the rapid elimination of options.',
            ],
            caseText:
              'Case:<br />Evaluating Techniques for Dance Animation Production',
            marginTop: '34rem', // 340px
            caseStudyDetails: [
              {
                title: '', // Removed to avoid duplication as requested
                type: 'wide-columns',
                leftBox: {
                  title: 'Code-driven (SVG/WAAPI)',
                  content:
                    'A method of writing the entire animation using mathematical code.',
                },
                rightBox: {
                  title: 'Video-based (MP4/WebM)',
                  content:
                    'A manual approach of producing videos directly using Photoshop and Premiere Pro.',
                },
                advantages: {
                  title: 'Advantages',
                  items: [
                    'Lightweight, GPU-accelerated processing',
                    'High browser compatibility',
                    'Seamless integration with user input values',
                    'Simplified maintenance',
                  ],
                },
              },
              {
                title: 'Immediate Prototyping',
                type: 'prototype-video',
                videoSrc: 'https://youtu.be/OjYjraazlvg',
                codeLeft: `const chorus = document.getElementById('chorus');
const SINGER_COUNT = 31;

// Singer SVG Template Generator
function createSingerSVG() {
  const xmlns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(xmlns, 'svg');
  svg.setAttribute('class', 'singer');
  svg.setAttribute('viewBox', '0 0 60 100');
  svg.setAttribute('width', '60');
  svg.setAttribute('height', '100');

  // Head
  const head = document.createElementNS(xmlns, 'circle');
  head.setAttribute('cx', '30');
  head.setAttribute('cy', '15');
  head.setAttribute('r', '10');
  svg.appendChild(head);

  // Torso (Body)
  // A simple rounded path
  const torso = document.createElementNS(xmlns, 'path');
  torso.setAttribute('class', 'torso');
  // Simple body shape
  torso.setAttribute('d', 'M20,28 Q30,28 40,28 L40,70 Q30,75 20,70 Z');
  torso.style.transformBox = 'fill-box';
  torso.style.transformOrigin = 'bottom center';
  svg.appendChild(torso);

  // Left Arm Group (pivot at shoulder)
  const armLGroup = document.createElementNS(xmlns, 'g');
  armLGroup.setAttribute('class', 'armL');

  armLGroup.style.transformBox = 'view-box';
  armLGroup.style.transformOrigin = '20px 30px';

  const armLRect = document.createElementNS(xmlns, 'rect');
  armLRect.setAttribute('x', '12'); // slightly left of shoulder
  armLRect.setAttribute('y', '30');
  armLRect.setAttribute('width', '8');
  armLRect.setAttribute('height', '35');
  armLRect.setAttribute('rx', '4');
  armLGroup.appendChild(armLRect);
  svg.appendChild(armLGroup);

  // Right Arm Group
  const armRGroup = document.createElementNS(xmlns, 'g');
  armRGroup.setAttribute('class', 'armR');
  // Shoulder position approx (40, 30)
  armRGroup.style.transformBox = 'view-box';
  armRGroup.style.transformOrigin = '40px 30px';

  const armRRect = document.createElementNS(xmlns, 'rect');
  armRRect.setAttribute('x', '40');
  armRRect.setAttribute('y', '30');
  armRRect.setAttribute('width', '8');
  armRRect.setAttribute('height', '35');
  armRRect.setAttribute('rx', '4');
  armRGroup.appendChild(armRRect);
  svg.appendChild(armRGroup);

  return svg;
}`,
                codeRight: `const singers = [...document.querySelectorAll('.singer')];

function makeAnimations(svgEl, seed = 0) {
 
  const torso = svgEl.querySelector('.torso');
  const armL = svgEl.querySelector('.armL');
  const armR = svgEl.querySelector('.armR');

  // Animation Keyframes

  // Body Sway
  const bodyAnim = torso.animate(
    [
      { transform: 'translate(0,0) rotate(0deg)' },
      { transform: 'translate(0,-1px) rotate(-2deg)' }, 
      { transform: 'translate(0,0) rotate(0deg)' },
      { transform: 'translate(0,1px) rotate(2deg)' }, 
      { transform: 'translate(0,0) rotate(0deg)' },
    ],
    {
      duration: 1600 + Math.random() * 200,
      iterations: Infinity,
      easing: 'ease-in-out',
      delay: seed,
    },
  );

  // Arm Swing
  const armLAnim = armL.animate(
    [
      { transform: 'rotate(10deg)' },
      { transform: 'rotate(-10deg)' },
      { transform: 'rotate(10deg)' },
    ],
    {
      duration: 1200 + Math.random() * 100,
      iterations: Infinity,
      easing: 'ease-in-out',
      delay: seed,
    },
  );

  const armRAnim = armR.animate(
    [
      { transform: 'rotate(-10deg)' },
      { transform: 'rotate(10deg)' },
      { transform: 'rotate(-10deg)' },
    ],
    {
      duration: 1200 + Math.random() * 100,
      iterations: Infinity,
      easing: 'ease-in-out',
      delay: seed + 100, // Phase shift
    },
  );

  return [bodyAnim, armLAnim, armRAnim];
}`,
                issues: {
                  title: 'Identified Issues',
                  items: [
                    'Excessive code complexity when representing human body movements',
                    'Difficulty in implementing hand-painted textures',
                  ],
                },
              },
              {
                title: 'Partial Integration of Video-based Methods',
                type: 'sprite-sheet',
                imageSrc: '/sprite_sheet.png',
                imageDimensions: { width: 1234, height: 95 },
                descriptions: [
                  'Created a sprite sheet by stitching together 20 individual frame images.',
                  'Programmed the system to display specific frames in synchronization with the beat.',
                ],
                code: `function computeFrameIndex(seconds, bpm) {
  const frames = cfg.frames; //20
  const subdivision = cfg.subdivision;
  const beats =
    seconds * (bpm / 60) * subdivision * Math.max(0, Math.abs(signedRate));
  let idx = Math.floor(beats) % frames; //1비트마다 +1 (0~19)
  if (signedRate < 0) {
    idx = (frames - 1 - idx + frames) % frames;
  }
  return idx;
}`,
              },
            ],
            dialogues: [],
          },
        ],
      },
    ],
  },
  {
    slug: 'saga',
    intro: {
      heroQuestion: {
        light: 'How can we',
        bold: 'visualize the SAGA?',
      },
      bodyText: ['Content coming soon...'],
    },
    media: {
      heroVideo: '/saga_hero.mp4', // Placeholder
    },
    projectInfo: {
      title: {
        bold: 'SAGA',
        regular: 'Project',
      },
      description: 'SAGA Project Description',
    },
    sections: [],
  },
];
