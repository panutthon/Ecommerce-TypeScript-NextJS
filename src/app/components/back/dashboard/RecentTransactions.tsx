
import DashboardCard from '@/app/components/back/shared/DashboardCard'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab'
import { Link, Typography } from '@mui/material'
import React from 'react'

const RecentTransactions = () => {
  return (
    <DashboardCard title="Recent Transactions">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>09:55 pm</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Payment received from Nirav Joshi of $45.52</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>06:05 pm</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>New sale recorded</Typography>{' '}
              <Link underline="none">
                #ML-4721
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>04:45 pm</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Payment was made of $85.85 to Sunil Joshi</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>02:20 pm</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>New sale recorded</Typography>{' '}
              <Link underline="none">
                #ML-3425
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>New arrival recorded</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>07:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Payment Received</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  )
}

export default RecentTransactions
