import React from 'react';
import { useState } from 'react';
import {
	Container,
	Wrapper,
	Title,
	Desc,
	CardContainer,
	ToggleButtonGroup,
	ToggleButton,
	Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/data';

const Projects = ({ openModal, setOpenModal }) => {
	const [toggle, setToggle] = useState('all');
	return (
		<Container id='projects'>
			<Wrapper>
				<Title>Projects</Title>
				<Desc>
					I have worked on a wide range of projects. <br /> Here are some of my
					projects built with passion.
				</Desc>
				<ToggleButtonGroup>
					{toggle === 'all' ? (
						<ToggleButton active value='all' onClick={() => setToggle('all')}>
							All
						</ToggleButton>
					) : (
						<ToggleButton value='all' onClick={() => setToggle('all')}>
							All
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'mern app' ? (
						<ToggleButton
							active
							value='mern app'
							onClick={() => setToggle('mern app')}>
							MERN APPS
						</ToggleButton>
					) : (
						<ToggleButton
							value='MERN app'
							onClick={() => setToggle('mern app')}>
							MERN APPS
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'react app' ? (
						<ToggleButton
							active
							value='react app'
							onClick={() => setToggle('react app')}>
							REACT APPS
						</ToggleButton>
					) : (
						<ToggleButton
							value='react app'
							onClick={() => setToggle('react app')}>
							REACT APPS
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'web app' ? (
						<ToggleButton
							active
							value='web app'
							onClick={() => setToggle('web app')}>
							WEB APPS
						</ToggleButton>
					) : (
						<ToggleButton value='web app' onClick={() => setToggle('web app')}>
							WEB APPS
						</ToggleButton>
					)}
				</ToggleButtonGroup>
				<CardContainer>
					{toggle === 'all' &&
						projects.map((project) => (
							<ProjectCard
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
					{projects
						.filter((item) => item.category == toggle)
						.map((project) => (
							<ProjectCard
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
