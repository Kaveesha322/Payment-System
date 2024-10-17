import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTachometerAlt, FaUtensils, FaPlusSquare, FaChartBar, FaSignOutAlt, FaHome, FaTruck, FaCreditCard, FaBox, FaListAlt } from 'react-icons/fa';
import Logo from '../Images/logo.png';

const SidebarContainer = styled.div`
  width: 220px;
  height: 250vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #ecf0f1;
  background-image: url('https://wallpapers.com/images/hd/black-color-background-kvv6asd39zluqt0o.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px;
`;

const LogoTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ecf0f1;
`;

const Menu = styled.div`
  flex-grow: 1;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #34495e;
    color: #fff;
  }
`;

const Icon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

const SubMenu = styled.div`
  padding-left: 30px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const SubMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #2c3e50;
    color: #fff;
  }
`;

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <Menu>
       
        

        
        <MenuItem onClick={() => toggleSection('payment')}>
          <Icon><FaCreditCard /></Icon>
          Payment
        </MenuItem>
        {openSection === 'payment' && (
          <SubMenu isOpen={openSection === 'payment'}>
            <Link to="/view-payment" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SubMenuItem>View Payment</SubMenuItem>
            </Link>
            <Link to="/payment-report" style={{ textDecoration: 'none', color: 'inherit' }}>
              <SubMenuItem>Payment Report</SubMenuItem>
            </Link>
          </SubMenu>
        )}

        

        

        

        




      </Menu>
      <Link to="/home-page" style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem>
          <Icon><FaSignOutAlt /></Icon>
          Sign Out
        </MenuItem>
      </Link>
    </SidebarContainer>
  );
};

export default Sidebar;
