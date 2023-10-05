'use client'
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
    </>
  );
};
export default DrawerComponent;