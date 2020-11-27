import HomeIcon from '@material-ui/icons/HomeRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

export const businessItems = [
  { text: 'Home', href: '/dashboard', icon: <HomeIcon />, enabled: true },
  {
    text: 'Analytics',
    href: '/analytics',
    icon: <BubbleChartRoundedIcon />,
    enabled: false,
  },
  {
    text: 'Public Page',
    href: '/page',
    icon: <PublicRoundedIcon />,
    enabled: false,
  },
  { text: 'Share', href: '/share', icon: <ShareRoundedIcon />, enabled: false },
  {
    text: 'Reports',
    href: '/report',
    icon: <AssessmentRoundedIcon />,
    enabled: false,
  },
];

export const administrationItems = [
  {
    text: 'Account',
    href: '/account',
    icon: <PersonRoundedIcon />,
    enabled: false,
  },
  {
    text: 'Settings',
    href: '/settings',
    icon: <SettingsRoundedIcon />,
    enabled: false,
  },
];

export const otherItems = [
  { text: 'Help', href: '/help', enabled: false },
  { text: 'Contact', href: '/contact', enabled: false },
];
