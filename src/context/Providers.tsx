import React, { PropsWithChildren, memo } from 'react'
import { ThemeProvider } from './ThemeContext'
import { LikeVideoProvider } from './LikeVideoContext'
import { VideoRecordProvider } from './VideoRecordContext'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <VideoRecordProvider>
        <LikeVideoProvider>{children}</LikeVideoProvider>
      </VideoRecordProvider>
    </ThemeProvider>
  )
}

export default memo(Providers)
