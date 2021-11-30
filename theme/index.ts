import { extendTheme } from "@chakra-ui/react";

const nakupujTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          ring: 3,
          ringColor: 'gray.300'
        }
      }
    },
    Modal: {
      baseStyle: {
        closeButton: {
          _focus: {
            ring: 3,
            ringColor: 'gray.300'
          }
        }
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'green.500'
      }
    },
    Radio: {
      baseStyle: {
        control: {
          _focus: {
            ring: 2,
            ringColor: 'green.300'
          }
        }
      },
      defaultProps: {
        colorScheme: 'green'
      }
    }
  }
});

export default nakupujTheme;