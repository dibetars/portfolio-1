import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Dibe, a product and technology lead based in Accra, Ghana, currently shaping impactful digital experiences at{' '}
      <Link href="https://krontiva.africa">Krontiva Africa</Link> and building tech-enabled platforms across logistics, commerce, and manufacturing.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My work spans product strategy, UX design, backend architecture, and no-code/low-code implementations, with a deep interest in solving African problems using lean, scalable solutions. Recent projects include a WhatsApp-native commerce suite, a geofencing-based delivery assignment system, and a manufacturing insights dashboard.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I thrive at the intersection of design, engineering, and business, and I'm constantly refining systems to deliver real outcomes—whether it's automating inventory for small businesses or crafting payment flows from scratch.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      When I'm not building platforms, I'm mentoring, working on agriculture projects, or experimenting with music at{' '}
      <Link href="https://www.instagram.com/official.idrcrds">ID RCRDS</Link>. Always open to collaborating, especially on bold ideas that bring structure to chaos.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Dibe Laba, Product and Technology Lead at Krontiva Africa"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
