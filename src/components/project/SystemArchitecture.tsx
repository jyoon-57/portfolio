import Image from 'next/image';
import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection } from '@/data/projects';

interface SystemArchitectureProps {
  section: Extract<ProjectSection, { type: 'system-architecture' }>;
}

export default function SystemArchitecture({
  section,
}: SystemArchitectureProps) {
  const { input, boxes, output } = section;

  return (
    <div className={styles.systemArchitectureContainer}>
      <div className={styles.systemArchHeader}>
        <h3 className={styles.sysArchTitle}>{section.title}</h3>
        <span className={styles.sysArchSubtitle}>{section.subtitle}</span>
      </div>

      {/* Input Section */}
      <div className={styles.inputSection}>
        <div className={styles.inputVideoWrapper}>
          {input.videoSrc.endsWith('.jpg') ||
          input.videoSrc.endsWith('.png') ||
          input.videoSrc.endsWith('.jpeg') ? (
            <Image
              fill
              className={styles.inputVideo}
              src={input.videoSrc}
              alt={input.title}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <video
              className={styles.inputVideo}
              src={input.videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
        <div className={styles.inputTextWrapper}>
          <h4 className={styles.inputTitle}>{input.title}</h4>
          <p
            className={styles.inputBody}
            dangerouslySetInnerHTML={{ __html: input.body }}
          />
        </div>
      </div>

      {/* Layout Boxes */}
      <div className={`${styles.architectureBox} ${styles.handsBox}`}>
        <div className={styles.arrowInputToData} />
        <div className={styles.boxLabel}>hands.js</div>

        {/* Data Preprocessing Box */}
        <div className={`${styles.innerBox} ${styles.dataPreprocessingBox}`}>
          <h5 className={styles.innerTitle}>{boxes.preprocessing.title}</h5>
          <span className={styles.innerSubtitle}>
            {boxes.preprocessing.subtitle}
          </span>

          <div className={styles.innerList}>
            {boxes.preprocessing.items.map((item, idx) => (
              <div key={idx} className={styles.innerListItem}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemDesc}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gesture Interpretation Text & Arrows */}
        <div className={styles.gestureSection}>
          <div className={styles.gestureTextWrapper}>
            <h5 className={styles.gestureTitle}>{boxes.gesture.title}</h5>
            <span className={styles.gestureSubtitle}>
              {boxes.gesture.subtitle}
            </span>
          </div>

          <div className={styles.branchingContainer}>
            <div className={styles.branchVerticalMain} />
            <div className={styles.branchHorizontal} />
            <div className={styles.branchDropLeft} />
            <div className={styles.branchDropRight} />
          </div>
        </div>

        {/* Action Boxes Grid */}
        <div className={styles.actionsGrid} style={{ marginTop: '0' }}>
          {boxes.actions.map((action, idx) => (
            <div key={idx} className={styles.actionBox}>
              <h6 className={styles.actionTitle}>{action.title}</h6>
              <span className={styles.actionSubtitle}>{action.subtitle}</span>
              <div
                className={styles.actionContent}
                dangerouslySetInnerHTML={{ __html: action.content }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main.js Box */}
      <div className={`${styles.architectureBox} ${styles.mainBox}`}>
        <div className={styles.arrowHandsToMain} />
        <div className={styles.boxLabel}>main.js</div>
        <div className={styles.mainInnerBox}>
          <h5 className={styles.mainTitle}>{boxes.main.title}</h5>
          <span className={styles.mainSubtitle}>{boxes.main.subtitle}</span>
          <p className={styles.mainDescription}>{boxes.main.desc}</p>
        </div>
      </div>

      {/* Choir.js Box */}
      <div className={`${styles.architectureBox} ${styles.choirBox}`}>
        <div className={styles.arrowMainToChoir} />
        <div className={styles.boxLabel}>choir.js</div>

        <div className={styles.choirTopSection}>
          <div className={styles.choirTextWrapper}>
            <h5 className={styles.choirTitle}>{boxes.choir.title}</h5>
            <span className={styles.choirSubtitle}>{boxes.choir.subtitle}</span>
          </div>
          <div className={styles.branchingContainer}>
            <div className={styles.choirBranchHorizontal} />
            <div className={styles.choirDropLeft} />
            <div className={styles.choirDropRight} />
          </div>
        </div>

        <div className={styles.choirGrid}>
          {/* Box 1 */}
          <div className={styles.choirContentBox}>
            <h6 className={styles.choirBoxTitle}>{boxes.choir.box1.title}</h6>
            <p
              className={styles.choirBoxContent}
              dangerouslySetInnerHTML={{ __html: boxes.choir.box1.content }}
            />
          </div>
          {/* Box 2 */}
          <div className={styles.choirContentBox}>
            <h6 className={styles.choirBoxTitle}>{boxes.choir.box2.title}</h6>
            <div className={styles.choirBoxContent}>
              {boxes.choir.box2.content.map((p, idx) => (
                <p
                  key={idx}
                  style={idx === 0 ? { marginBottom: '2rem' } : {}}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className={styles.outputSection}>
        <div className={styles.arrowChoirToOutput} />
        <div className={styles.outputVideoContainer}>
          {output.videoSrc.endsWith('.jpg') ||
          output.videoSrc.endsWith('.png') ||
          output.videoSrc.endsWith('.jpeg') ? (
            <Image
              width={output.width || 1745}
              height={output.height || 870}
              className={styles.outputVideo}
              src={output.videoSrc}
              alt="System Output"
              style={{ width: 'auto', height: '43.5rem' }}
            />
          ) : (
            <video
              className={styles.outputVideo}
              src={output.videoSrc}
              autoPlay
              loop
              muted
              playsInline
            >
              {/* Source is usually implicit from src prop but consistent with other videos */}
            </video>
          )}
        </div>
        {output.githubLink && (
          <div className={styles.githubLinkWrapper}>
            <a
              href={output.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              Check Entire Code: {output.githubLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
