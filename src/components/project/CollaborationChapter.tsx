import Image from 'next/image';
import styles from '@/app/work/[slug]/project.module.css';
import { ProjectSection, DialogueBlock } from '@/data/projects';
import YouTubeEmbed from '@/components/YouTubeEmbed';

interface CollaborationChapterProps {
  section: Extract<ProjectSection, { type: 'collaboration' }>;
}

export default function CollaborationChapter({
  section,
}: CollaborationChapterProps) {
  return (
    <>
      {/* Main Title Section */}
      {(section.mainTitle || section.mainSubtitle) && (
        <div className={styles.collaborationSection}>
          <h2 className={styles.collabTitle}>{section.mainTitle}</h2>
          <h3 className={styles.collabSubtitle}>{section.mainSubtitle}</h3>
        </div>
      )}

      {/* Chapters Loop */}
      {section.chapters.map((chapter, index) => (
        <div
          key={index}
          className={styles.collabDetailSection}
          style={
            chapter.marginTop ? { marginTop: chapter.marginTop } : undefined
          }
        >
          {/* Chapter Intro (Title-Body-Case) if content exists */}
          {chapter.title && (
            <div className={styles.chapterGrid}>
              <div className={styles.chapterLeftCol}>
                {chapter.num && (
                  <div className={styles.chapterNum}>{chapter.num}</div>
                )}
                <h4 className={styles.chapterTitle}>{chapter.title}</h4>
                <span className={styles.chapterSubtitle}>
                  {chapter.subtitle}
                </span>

                {chapter.caseText && (
                  <div className={styles.caseWrapper}>
                    <p
                      className={styles.chapterCase}
                      dangerouslySetInnerHTML={{ __html: chapter.caseText }}
                    />
                    {chapter.additionalCase && (
                      <div className={styles.additionalCaseText}>
                        {chapter.additionalCase.text}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.chapterRightCol}>
                <div
                  className={styles.chapterBody}
                  style={
                    chapter.bodyWidth ? { width: chapter.bodyWidth } : undefined
                  }
                >
                  {chapter.bodyText.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {chapter.caseStudyDetails?.map((detail, dIdx) => (
            <div key={dIdx} className={styles.caseStudySection}>
              {/* Conditional Top Separator: Skip for Index 1 */}
              {/* Conditional Top Separator: Skip for Index 1 or if title is empty/wide-columns specific */}
              {dIdx !== 1 &&
                detail.title &&
                detail.type !== 'prototype-video' &&
                detail.type !== 'sprite-sheet' && (
                  <div className={styles.caseStudySeparator} />
                )}
              {detail.title &&
                detail.type !== 'prototype-video' &&
                detail.type !== 'sprite-sheet' && (
                  <h4 className={styles.caseStudyTitle}>{detail.title}</h4>
                )}

              {(!detail.type || detail.type === 'columns') && (
                <div className={styles.caseStudyGrid}>
                  {detail.items?.map((item, iIdx) => (
                    <div key={iIdx} className={styles.caseStudyColumn}>
                      <div className={styles.caseStudyBox}>
                        <h5 className={styles.caseStudyBoxTitle}>
                          {item.box.title}
                        </h5>
                        <p className={styles.caseStudyBoxContent}>
                          {item.box.content}
                        </p>
                        {/* 45deg Connector Lines for Fist Detection (Index 1 of Details) */}
                        {/* Only apply if title matches to be safe */}
                        {detail.title.includes('Four Major Approaches') && (
                          <>
                            {iIdx === 0 && (
                              <div
                                className={styles.connectorLine}
                                style={{ right: '-39rem' }}
                              />
                            )}
                            {iIdx === 1 && (
                              <div
                                className={styles.connectorLine}
                                style={{
                                  left: '41.5rem',
                                }}
                              />
                            )}
                          </>
                        )}
                      </div>
                      <div className={styles.caseStudyText}>
                        <h5 className={styles.caseStudyTextTitle}>
                          {item.text.title}
                        </h5>
                        <p className={styles.caseStudyTextContent}>
                          {item.text.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Prototype Video Layout */}
              {detail.type === 'prototype-video' && (
                <div className={styles.prototypeWrapper}>
                  <div className={styles.prototypeContainer}>
                    {/* Left: Title + Video + Issues */}
                    <div className={styles.prototypeLeft}>
                      {detail.title && (
                        <h4 className={styles.prototypeTitle}>
                          {detail.title}
                        </h4>
                      )}
                      {detail.videoSrc && (
                        <YouTubeEmbed
                          url={detail.videoSrc}
                          className={styles.prototypeVideo}
                          showSoundToggle={false}
                          style={{ aspectRatio: '16/9' }} // Horizontal frame
                          iframeStyle={{
                            width: '100%',
                            height: '100%',
                            aspectRatio: 'unset',
                            position: 'absolute',
                            top: '50%',
                            left: '-0.2%',
                            transform: 'translateY(-50%) scale(1)', // Zoom in to remove letterboxing (Center Crop)
                          }}
                        />
                      )}

                      {/* Issues Section - Moved inside Left Column */}
                      {detail.issues && (
                        <div className={styles.issuesSection}>
                          <h5 className={styles.issuesTitle}>
                            {detail.issues.title}
                          </h5>
                          <div className={styles.issuesList}>
                            {detail.issues.items.map((issue, idx) => (
                              <p key={idx} className={styles.issuesItem}>
                                {issue}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Code Columns */}
                    <div className={styles.prototypeRight}>
                      {detail.codeLeft && (
                        <div className={styles.codeColumn}>
                          <pre className={styles.prototypeCodeText}>
                            {detail.codeLeft}
                          </pre>
                        </div>
                      )}
                      {detail.codeRight && (
                        <div className={styles.codeColumn}>
                          <pre className={styles.prototypeCodeText}>
                            {detail.codeRight}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {(detail.type === 'wide-block' ||
                detail.type === 'wide-block-right') &&
                detail.mainBox && (
                  <div
                    className={
                      detail.type === 'wide-block-right'
                        ? styles.wideBlockWrapperRight
                        : styles.wideBlockWrapper
                    }
                  >
                    {/* Wide Box */}
                    <div
                      className={
                        detail.type === 'wide-block-right'
                          ? styles.wideBoxRight
                          : styles.wideBox
                      }
                    >
                      <h5 className={styles.caseStudyBoxTitle}>
                        {detail.mainBox.title}
                      </h5>
                      <div
                        className={
                          detail.type === 'wide-block-right'
                            ? styles.wideBoxRightRow
                            : styles.wideBoxGrid
                        }
                      >
                        <div
                          className={
                            detail.type === 'wide-block-right'
                              ? styles.wideBoxRightContent
                              : styles.wideBoxContentCol
                          }
                        >
                          <p className={styles.caseStudyBoxContent}>
                            {detail.mainBox.leftContent}
                          </p>
                        </div>
                        <div
                          className={
                            detail.type === 'wide-block-right'
                              ? styles.wideBoxRightContent
                              : styles.wideBoxContentCol
                          }
                        >
                          <p className={styles.caseStudyBoxContent}>
                            {detail.mainBox.rightContent}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sub Texts Grid */}
                    <div
                      className={
                        detail.type === 'wide-block-right'
                          ? styles.wideBlockSubGridRight
                          : styles.wideBlockSubGrid
                      }
                    >
                      {detail.subTexts?.map((text, tIdx) => (
                        <div key={tIdx} className={styles.wideBlockSubText}>
                          <h5 className={styles.caseStudyTextTitle}>
                            {text.title}
                          </h5>
                          <p className={styles.caseStudyTextContent}>
                            {text.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Connector Line from dance_video to sprite sheet */}
                    <div className={styles.spriteSheetConnectorLine} />
                  </div>
                )}
              {/* Wide Columns Layout (Evaluating Techniques) */}
              {detail.type === 'wide-columns' &&
                detail.leftBox &&
                detail.rightBox && (
                  <div className={styles.wideColumnWrapper}>
                    <div className={styles.evaluationGrid}>
                      {/* Left Box */}
                      <div className={styles.evaluationBox}>
                        <h5 className={styles.evaluationBoxTitle}>
                          {detail.leftBox.title}
                        </h5>
                        <p className={styles.evaluationBoxBody}>
                          {detail.leftBox.content}
                        </p>
                      </div>

                      {/* Right Box */}
                      <div className={styles.evaluationBox}>
                        <h5 className={styles.evaluationBoxTitle}>
                          {detail.rightBox.title}
                        </h5>
                        <p className={styles.evaluationBoxBody}>
                          {detail.rightBox.content}
                        </p>
                      </div>
                    </div>

                    {/* Advantages Section */}
                    {detail.advantages && (
                      <div className={styles.advantagesSection}>
                        <h5 className={styles.advantagesTitle}>
                          {detail.advantages.title}
                        </h5>
                        <ul className={styles.advantagesList}>
                          {detail.advantages.items.map((adv, aIdx) => (
                            <li key={aIdx} className={styles.advantagesItem}>
                              <p>{adv}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Connector Line from Code-driven box to Prototype section */}
                    <div className={styles.prototypeConnectorLine} />
                  </div>
                )}
              {/* Sprite Sheet Layout */}
              {detail.type === 'sprite-sheet' && detail.imageSrc && (
                <div className={styles.spriteSheetWrapper}>
                  {/* Title */}
                  {detail.title && (
                    <h4 className={styles.spriteSheetTitle}>{detail.title}</h4>
                  )}
                  <div className={styles.spriteSheetContainer}>
                    {/* Left: Image box with descriptions below */}
                    <div className={styles.spriteSheetLeft}>
                      <div className={styles.spriteSheetImageBox}>
                        <Image
                          src={detail.imageSrc}
                          alt={detail.title}
                          className={styles.spriteSheetImage}
                          width={detail.imageDimensions?.width || 1234}
                          height={detail.imageDimensions?.height || 95}
                          style={{ width: '61.7rem', height: 'auto' }}
                        />
                      </div>
                      {detail.descriptions && (
                        <div className={styles.spriteSheetDescriptions}>
                          {detail.descriptions.map((desc, idx) => (
                            <p key={idx} className={styles.spriteSheetDesc}>
                              {desc}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: Code */}
                    {detail.code && (
                      <div className={styles.spriteSheetCode}>
                        <pre className={styles.spriteSheetCodeText}>
                          {detail.code}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Gray Background Section - starts 240px below sprite sheet descriptions */}
              {detail.type === 'sprite-sheet' && (
                <div className={styles.grayBackgroundSection}>
                  <Image
                    src="/magritte_epilogue.jpg"
                    alt="Magritte Epilogue"
                    className={styles.epilogueImage1}
                    width={1673}
                    height={941}
                  />
                  <Image
                    src="/magritte_epilogue_2.jpg"
                    alt="Magritte Epilogue 2"
                    className={styles.epilogueImage2}
                    width={1673}
                    height={947}
                  />
                  <Image
                    src="/magritte_ending.jpg"
                    alt="Magritte Ending"
                    className={styles.endingImage}
                    width={2880}
                    height={2880}
                  />
                </div>
              )}

              {/* Conditional Bottom Separator for Index 1 */}
              {dIdx === 1 &&
                detail.type !== 'prototype-video' &&
                detail.type !== 'sprite-sheet' && (
                  <div className={styles.caseStudySeparatorBottom} />
                )}
            </div>
          ))}

          {/* Dialogue Blocks (Me/AI) */}
          {chapter.dialogues.map((dialogue, dIdx) => (
            <DialogueSectionWrapper key={dIdx} dialogue={dialogue} />
          ))}
        </div>
      ))}
    </>
  );
}

// Sub-component for Dialogue Blocks
// Sub-component for Dialogue Blocks
function DialogueSectionWrapper({ dialogue }: { dialogue: DialogueBlock }) {
  let wrapperClass = styles.meSection;
  let labelClass = styles.meLabel;
  let gridClass = styles.meGrid;
  let boxClass = styles.meBox;
  let codeColClass = styles.meCodeColumn;
  const label = dialogue.label;

  if (dialogue.label === 'AI') {
    if (dialogue.type === 'box-only') {
      wrapperClass = styles.aiReviewSection;
      labelClass = styles.aiLabel;
      gridClass = styles.aiReviewGrid;
      boxClass = styles.aiReviewBox;
    } else {
      wrapperClass = styles.aiSection;
      labelClass = styles.aiLabel;
      gridClass = styles.aiGrid;
      boxClass = styles.aiBox;
      codeColClass = styles.aiCodeColumn;
    }
  } else if (dialogue.label === 'Me') {
    if (dialogue.alignment === 'right' && dialogue.type === 'code-box') {
      wrapperClass = styles.debuggingSection;
      gridClass = styles.debuggingGrid;
      boxClass = styles.debuggingBox;
      codeColClass = styles.debuggingCode;
    }
  }

  const renderCodeColumn = () => (
    <div className={codeColClass}>
      {dialogue.codeBlocks?.map((block, idx) => (
        <div key={idx}>
          {block.split ? (
            <div className={styles.splitCodeWrapper}>
              {block.codes?.map((code, cIdx) => (
                <div
                  key={cIdx}
                  className={styles.codeBlockText}
                  style={{ flex: 1, marginLeft: cIdx > 0 ? '2rem' : 0 }}
                >
                  {code}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.codeBlockText}>{block.code}</div>
          )}
          {idx < (dialogue.codeBlocks?.length || 0) - 1 && (
            <div className={styles.codeSeparator} />
          )}
        </div>
      ))}
    </div>
  );

  const renderBoxColumn = () => (
    <div
      className={boxClass}
      style={
        dialogue.label === 'Me' && dialogue.alignment === 'right'
          ? { width: '67.6rem' }
          : {}
      }
    >
      {dialogue.boxItems?.map((item, idx) => (
        <div
          key={idx}
          className={`${styles.meBoxItem} ${
            idx > 0 && dialogue.label === 'Me' ? styles.boxItemSpacer : ''
          }`}
          style={{
            marginTop: idx > 0 && dialogue.label === 'AI' ? '4rem' : undefined,
            width: '59.6rem',
          }}
        >
          <h5 className={styles.meBoxTitle}>{item.title}</h5>
          <p
            className={styles.meBoxBody}
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={wrapperClass}>
      <div className={labelClass}>{label}</div>
      <div className={gridClass}>
        {dialogue.type === 'code-box' && (
          <>
            {renderCodeColumn()}
            {renderBoxColumn()}
          </>
        )}
        {dialogue.type === 'box-code' && (
          <>
            {renderBoxColumn()}
            {renderCodeColumn()}
          </>
        )}
        {dialogue.type === 'box-only' && renderBoxColumn()}
        {dialogue.type === 'code-only' && renderCodeColumn()}
      </div>
    </div>
  );
}
