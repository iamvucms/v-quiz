import {ignore} from 'mobx-sync';

export const ignorePersistNodes = (context, nodeNames) => {
  nodeNames.forEach(nodeName => ignore(context, nodeName));
};
