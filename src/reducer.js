import {setEntries, next, restart, vote, INITIAL_STATE} from './core';


export default function reducer(state = INITIAL_STATE, action) {
  // Figure out which function to call and call it
  switch(action.type) {
  	case 'SET_ENTRIES' : 
  		//console.log('SETTING ENTRIES');
  		return setEntries(state, action.entries);
  	case 'NEXT': 
  		//console.log('GOTO NEXT STATE');
  		return next(state);
  	case 'VOTE': {
  		//console.log('THERE IS A VOTE');
  		return state.update('vote', voteState => vote(voteState,action.entry));
  	}
  	case 'RESTART': {
  		console.log('RESTART');
  		return restart(state);
  	}
  }
  return state;
}