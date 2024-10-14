#include <jni.h>
#include "react-native-validus-component-mobile.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_validuscomponentmobile_ValidusComponentMobileModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return validuscomponentmobile::multiply(a, b);
}
