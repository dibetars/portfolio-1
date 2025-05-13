import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <span className={styles.designCredit}>
        Design by <Link href="https://hamishw.com" target="_blank" rel="noopener noreferrer"> HamishMW</Link>
      </span>
    </Text>
  </footer>
);
