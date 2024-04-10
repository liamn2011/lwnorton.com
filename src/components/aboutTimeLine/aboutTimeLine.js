import * as React from "react";

import TimeLineBox from "./timeLineBox/timeLineBox";

const AboutTimeLine = ({ aboutMainContent }) => {
	return (
		<>
			{aboutMainContent.map((node, index) => {
				const isStart = index % 2 === 0;
				return (
					<li key={index}>
						<hr className='hidden md:bg-gray-800 md:block' />
						{isStart && <TimeLineBox node={node} isStart={true} />}
						<div className='hidden timeline-middle md:block'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='bg-gray-800' className='w-5 h-5 text-primary'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						{!isStart && <TimeLineBox node={node} isStart={false} />}
						<hr className='hidden bg-gray-800 md:block' />
					</li>
				);
			})}
		</>
	);
};

export default AboutTimeLine;
