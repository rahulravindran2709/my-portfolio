// eslint-plugin-validate-paths.js
//@ts-nocheck
export const rules = {
  'validate-paths': {
    create: function (context) {
      return {
        Literal(node) {
          if (typeof node.value === 'string' && node.value.startsWith('/public/')) {
            console.log('In plugin')
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(__dirname, 'public', node.value.replace('/public/', ''));
            if (!fs.existsSync(filePath)) {
              context.report({
                node,
                message: `File path "${node.value}" does not exist.`,
              });
            }
          }
        },
      };
    },
  },
};