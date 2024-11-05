import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ourWork.module.scss';

interface WorkBoxProps {
  title: string;
  icon: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ title, icon }) => (
    <Image src={icon} alt={title} className={styles.icon} width={400} height={500} />
  // <div className={styles.workBox}>
    
  //   <h3 className={styles.title}>{title}</h3>
  // </div>
);

const OurWork: React.FC = () => {
  const workAreas: WorkBoxProps[] = [
    { title: 'Quality', icon: '/Images/quality2.png' },
    { title: 'Mentors', icon: '/Images/mentor2.png' },
    { title: 'Develop', icon: '/Images/develop2.png' },
    { title: 'Product', icon: '/Images/product2.png' },
  ];

  return (
    <section className={styles.ourWork}>
      <h2 className={styles.sectionTitle}>Our Work</h2>
      <div className={styles.gridContainer}>
        {workAreas.map((area, index) => (
          <WorkBox key={index} title={area.title} icon={area.icon} />
        ))}
      </div>
    </section>
  );
};

export default OurWork;