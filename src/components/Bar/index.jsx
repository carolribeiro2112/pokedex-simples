import { StatBar } from './styles';

export function Bar({stat}) {
  
  return (
    <StatBar>
      <div>
        <div style={{width: `${(stat/3)}%`}}/>
      </div>
    </StatBar>
  );
}