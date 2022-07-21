import React, { memo } from 'react'
import { Button } from 'antd';

const App: React.FC = () => {
  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default memo(App)
