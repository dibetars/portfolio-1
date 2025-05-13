import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import KBFTexture from '~/assets/KBF003.png';
import KBFTextureLarge from '~/assets/KBF003.png';
import KBFTexturePlaceholder from '~/assets/KBF003.png';
import MNTexture from '~/assets/MN003.png';
import MNTextureLarge from '~/assets/MN003.png';
import MNTexturePlaceholder from '~/assets/MN003.png';
import DLTexture from '~/assets/DL001.png';
import DLTextureLarge from '~/assets/DL002.png';
import DLTexturePlaceholder from '~/assets/DL001.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Portfolio of Dibe Laba — a product designer working on web & mobile apps with a focus on transformation.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Kwame Bofrot Foundation Platform"
        description="A structured and centralized player database to support scouting, recruitment, and talent development efforts by documenting key information about young football players."
        buttonText="View website"
        buttonLink="https://www.kwamebofrotfoundation.org/home"
        model={{
          type: 'laptop',
          alt: 'Kwame Bofrot Foundation Platform screenshot',
          textures: [
            {
              srcSet: `${KBFTexture} 1280w, ${KBFTextureLarge} 2560w`,
              placeholder: KBFTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Delika Rider"
        description="A rider-facing application within the Delika platform, which is a tech-enabled food delivery and logistics service. The app provides real-time order tracking, route optimization, and seamless communication between riders and customers."
        buttonText="View website"
        buttonLink="https://delika.app"
        model={{
          type: 'phone',
          alt: 'Delika Rider mobile application interface',
          textures: [
            {
              srcSet: `${DLTexture} 375w, ${DLTextureLarge} 750w`,
              placeholder: DLTexturePlaceholder,
            },
            {
              srcSet: `${DLTextureLarge} 375w, ${DLTexture} 750w`,
              placeholder: DLTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Manutrax (In Progress)"
        description="Manufacturing Process Visualization ERP. Designed modules for inventory tracking, flow charts, and real-time data monitoring. Built backend to support custom factory pipelines. Introduced AI insights for operational efficiency (KPI flags and bottleneck alerts)."
        model={{
          type: 'laptop',
          alt: 'Manutrax Manufacturing Process Visualization ERP',
          textures: [
            {
              srcSet: `${MNTexture} 1280w, ${MNTextureLarge} 2560w`,
              placeholder: MNTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
