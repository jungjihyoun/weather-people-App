import HomeStack from '../navigation/HomeStack';
import FeedStack from '../navigation/FeedStack';
import ProfileStack from '../navigation/ProfileStack';
import PeoplePickStack from '../navigation/PeoplePickStack';
import UploadStack from '../navigation/UploadStack';

export const mainRoutes = [
  {
    name: '홈',
    component: HomeStack,
    inactiveIcon: require('../assets/home_off.png'),
    activeIcon: require('../assets/home_on.png'),
  },
  {
    name: '게시물',
    component: FeedStack,
    inactiveIcon: require('../assets/feed_off.png'),
    activeIcon: require('../assets/feed_on.png'),
  },
  {
    name: '피플 pick',
    component: PeoplePickStack,
    inactiveIcon: require('../assets/pick_off.png'),
    activeIcon: require('../assets/pick_on.png'),
  },
  {
    name: '글쓰기',
    component: UploadStack,
    inactiveIcon: require('../assets/upload_off.png'),
    activeIcon: require('../assets/upload_on.png'),
  },
  {
    name: '관리',
    component: ProfileStack,
    inactiveIcon: require('../assets/profile_off.png'),
    activeIcon: require('../assets/profile_on.png'),
  },
];
