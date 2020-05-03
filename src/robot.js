const moveRobot = ({ gameArea, position }) => {
  if(position.heading === "N" && position.y < gameArea.max_y) position.y++;
  if(position.heading === "S" && position.y > 0) position.y--;
  if(position.heading === "E" && position.x < gameArea.max_x) position.x++;
  if(position.heading === "W" && position.x > 0) position.x--;

  return position;
}

const mappingAction = {
  'N': action => action === 'L' ? 'W' : 'E',
  'S': action => action === 'L' ? 'E' : 'W',
  'W': action => action === 'L' ? 'S' : 'N',
  'E': action => action === 'L' ? 'N' : 'S',
}

const rotateRobot = ({ position,  nextAction}) => {
  position.heading = mappingAction[position.heading](nextAction);
  return position;
}

const initRobot = ({ position }) => ({
  move: ({ gameArea, nextAction }) =>
    position = nextAction === 'M'
      ? moveRobot({ gameArea, position})
      : rotateRobot({ position, nextAction }),
  getCurrentPosition: () => position,
});

module.exports = { initRobot };
