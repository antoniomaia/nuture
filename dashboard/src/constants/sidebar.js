import HomeIcon from '@material-ui/icons/HomeRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

export const businessItems = [
  { text: 'Home', href: '/dashboard', icon: <HomeIcon /> },
  { text: 'Analytics', href: '/analytics', icon: <BubbleChartRoundedIcon /> },
  { text: 'Public Page', href: '/page', icon: <PublicRoundedIcon /> },
  { text: 'Share', href: '/share', icon: <ShareRoundedIcon /> },
  { text: 'Reports', href: '/report', icon: <AssessmentRoundedIcon /> },
];

export const administrationItems = [
  { text: 'Account', href: '/account', icon: <PersonRoundedIcon /> },
  { text: 'Settings', href: '/settings', icon: <SettingsRoundedIcon /> },
];

export const otherItems = [
  { text: 'Help', href: '/help' },
  { text: 'Contact', href: '/contact' },
];
