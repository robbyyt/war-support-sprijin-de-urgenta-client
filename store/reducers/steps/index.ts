import { StepsStore, UserComponentType } from './types'

export enum ActionType {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

type Action = { type: ActionType.DECREASE } | { type: ActionType.INCREASE }

export const defaultStepsState: StepsStore = {
  steps: [
    {
      label: 'steps.userType',
      component: UserComponentType.userType
    },
    {
      label: 'steps.userData',
      component: UserComponentType.userData
    },
    {
      label: 'steps.resources',
      component: UserComponentType.userResources,
    },
  ],
  activeStep: 0,
}

export const steps = (
  state = defaultStepsState,
  action: Action
): StepsStore => {
  switch (action.type) {
    case ActionType.INCREASE: {
      if (state.activeStep + 1 > state.steps.length - 1) {
        return state
      }
      return {
        ...state,
        activeStep: state.activeStep + 1,
      }
    }
    case ActionType.DECREASE: {
      if (state.activeStep - 1 < 0) {
        return state
      }
      return {
        ...state,
        activeStep: state.activeStep - 1,
      }
    }
    default:
      return state
  }
}
