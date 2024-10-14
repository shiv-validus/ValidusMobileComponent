#ifdef __cplusplus
#import "react-native-validus-component-mobile.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNValidusComponentMobileSpec.h"

@interface ValidusComponentMobile : NSObject <NativeValidusComponentMobileSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ValidusComponentMobile : NSObject <RCTBridgeModule>
#endif

@end
