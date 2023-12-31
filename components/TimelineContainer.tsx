'use client';

import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

type Props = {
    values: string[]
}

function TimelineContainer({ values }: Props) {
    return (
        <div>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {values.slice(0, values.length - 1).map((value, i) => (
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#27272a' }} className='dark:!bg-zinc-100'/>
                            <TimelineConnector sx={{ backgroundColor: '#27272a' }} className='dark:!bg-zinc-100' />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '14px' }}>
                            <p>
                                {value}
                            </p>
                        </TimelineContent>
                    </TimelineItem>
                ))}

                {/* Code For Last Point of the cirriculum */}
                {values.slice(values.length - 1, values.length).map((value, i) => (
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#27272a' }} className='dark:!bg-zinc-100' />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '14px' }}>{value}</TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

export default TimelineContainer