import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MenuButtonContainer, Icon, NotificationBadge, NotificationBadgeNumber} from './styles';

interface MenuButtonProps extends TouchableOpacityProps {
  icon: string;
  iconSize: number;
  notificationNumber?: number;
}

const MenuButton:React.FC<MenuButtonProps> = ({icon, iconSize, notificationNumber, ...rest}) => {
  return (
    <MenuButtonContainer {...rest}>
      <Icon
        name={icon}
        size={iconSize}
      />
      {!!notificationNumber && notificationNumber > 0 &&
        <NotificationBadge>
          <NotificationBadgeNumber>{notificationNumber}</NotificationBadgeNumber>
        </NotificationBadge>
      }
    </MenuButtonContainer>
  )
}

export default MenuButton