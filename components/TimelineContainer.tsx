'use client';

import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

type Props = {}

function TimelineContainer({ }: Props) {
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
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>1{")"} Introduction to Futures & Options</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>2{")"} Momentum Option Trading ( Setup 1 , Setup 2 , Setup 3 )</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>3{")"} Option Trading Using Volatility & Reversal Trading (Setup 4 , Setup 5)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>4{")"} Swing Trading In Option (Setup 6 , Setup 7)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>5{")"} Option Selling Strategies (Setup 8 , Setup 9)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        <TimelineConnector sx={{ backgroundColor: '#27272a' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>6{")"} Hedge Trading Strategies (Setup 10 , Setup 11)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#27272a' }} />
                        {/* <TimelineConnector sx={{ backgroundColor: '#27272a' }} /> */}
                    </TimelineSeparator>
                    <TimelineContent sx={{ fontSize: '14px' }}>7{")"} Risk Management , Mindset & Psychology , Portfolio & Business Management & Bonus Strategies +1 Live Market session</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default TimelineContainer