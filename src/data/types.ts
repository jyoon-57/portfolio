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
