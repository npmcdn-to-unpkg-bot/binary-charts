import { configure } from '@kadira/storybook';

configure(() => {
    require('./simple');
    require('./contract-types');
    require('./times');
    require('./past-contracts');
    require('./open-contracts');
    require('./trading-times');
    require('./indicators');
}, module);
