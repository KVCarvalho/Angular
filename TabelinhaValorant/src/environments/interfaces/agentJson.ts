export interface agentJson {
    uuid: string;
    displayName: string;
    fullPortrait: string;
    background: string;
    backgroundGradientColors: string[]; // Aqui é uma array de strings
    role: {
      uuid: string;
      displayName: string;
      displayIcon: string;
    };
    isPlayableCharacter: boolean;
  }
  