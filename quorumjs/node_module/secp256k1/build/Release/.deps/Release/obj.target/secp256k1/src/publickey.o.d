cmd_Release/obj.target/secp256k1/src/publickey.o := g++ '-DNODE_GYP_MODULE_NAME=secp256k1' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DENABLE_MODULE_ECDH=1' '-DENABLE_MODULE_RECOVERY=1' '-DUSE_NUM_NONE=1' '-DUSE_FIELD_INV_BUILTIN=1' '-DUSE_SCALAR_INV_BUILTIN=1' '-DHAVE___INT128=1' '-DUSE_ASM_X86_64=1' '-DUSE_FIELD_5X52=1' '-DUSE_FIELD_5X52_INT128=1' '-DUSE_SCALAR_4X64=1' '-DBUILDING_NODE_EXTENSION' -I/root/.cache/node-gyp/13.8.0/include/node -I/root/.cache/node-gyp/13.8.0/src -I/root/.cache/node-gyp/13.8.0/deps/openssl/config -I/root/.cache/node-gyp/13.8.0/deps/openssl/openssl/include -I/root/.cache/node-gyp/13.8.0/deps/uv/include -I/root/.cache/node-gyp/13.8.0/deps/zlib -I/root/.cache/node-gyp/13.8.0/deps/v8/include -I../src/secp256k1-src -I../src/secp256k1-src/contrib -I../src/secp256k1-src/include -I../src/secp256k1-src/src -I../../nan -I/usr/local/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -Wall -Wno-maybe-uninitialized -Wno-nonnull-compare -Wno-uninitialized -Wno-unused-function -Wextra -O3 -fno-omit-frame-pointer -std=c++0x -fno-rtti -fno-exceptions -std=gnu++1y -MMD -MF ./Release/.deps/Release/obj.target/secp256k1/src/publickey.o.d.raw   -c -o Release/obj.target/secp256k1/src/publickey.o ../src/publickey.cc
Release/obj.target/secp256k1/src/publickey.o: ../src/publickey.cc \
 /root/.cache/node-gyp/13.8.0/include/node/node.h \
 /root/.cache/node-gyp/13.8.0/include/node/v8.h \
 /root/.cache/node-gyp/13.8.0/include/node/v8-internal.h \
 /root/.cache/node-gyp/13.8.0/include/node/v8-version.h \
 /root/.cache/node-gyp/13.8.0/include/node/v8config.h \
 /root/.cache/node-gyp/13.8.0/include/node/v8-platform.h \
 /root/.cache/node-gyp/13.8.0/include/node/node_version.h ../../nan/nan.h \
 /root/.cache/node-gyp/13.8.0/include/node/node_version.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv/errno.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv/version.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv/unix.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv/threadpool.h \
 /root/.cache/node-gyp/13.8.0/include/node/uv/linux.h \
 /root/.cache/node-gyp/13.8.0/include/node/node_buffer.h \
 /root/.cache/node-gyp/13.8.0/include/node/node.h \
 /root/.cache/node-gyp/13.8.0/include/node/node_object_wrap.h \
 ../../nan/nan_callbacks.h ../../nan/nan_callbacks_12_inl.h \
 ../../nan/nan_maybe_43_inl.h ../../nan/nan_converters.h \
 ../../nan/nan_converters_43_inl.h ../../nan/nan_new.h \
 ../../nan/nan_implementation_12_inl.h ../../nan/nan_persistent_12_inl.h \
 ../../nan/nan_weak.h ../../nan/nan_object_wrap.h ../../nan/nan_private.h \
 ../../nan/nan_typedarray_contents.h ../../nan/nan_json.h \
 ../src/secp256k1-src/include/secp256k1.h ../src/messages.h ../src/util.h
../src/publickey.cc:
/root/.cache/node-gyp/13.8.0/include/node/node.h:
/root/.cache/node-gyp/13.8.0/include/node/v8.h:
/root/.cache/node-gyp/13.8.0/include/node/v8-internal.h:
/root/.cache/node-gyp/13.8.0/include/node/v8-version.h:
/root/.cache/node-gyp/13.8.0/include/node/v8config.h:
/root/.cache/node-gyp/13.8.0/include/node/v8-platform.h:
/root/.cache/node-gyp/13.8.0/include/node/node_version.h:
../../nan/nan.h:
/root/.cache/node-gyp/13.8.0/include/node/node_version.h:
/root/.cache/node-gyp/13.8.0/include/node/uv.h:
/root/.cache/node-gyp/13.8.0/include/node/uv/errno.h:
/root/.cache/node-gyp/13.8.0/include/node/uv/version.h:
/root/.cache/node-gyp/13.8.0/include/node/uv/unix.h:
/root/.cache/node-gyp/13.8.0/include/node/uv/threadpool.h:
/root/.cache/node-gyp/13.8.0/include/node/uv/linux.h:
/root/.cache/node-gyp/13.8.0/include/node/node_buffer.h:
/root/.cache/node-gyp/13.8.0/include/node/node.h:
/root/.cache/node-gyp/13.8.0/include/node/node_object_wrap.h:
../../nan/nan_callbacks.h:
../../nan/nan_callbacks_12_inl.h:
../../nan/nan_maybe_43_inl.h:
../../nan/nan_converters.h:
../../nan/nan_converters_43_inl.h:
../../nan/nan_new.h:
../../nan/nan_implementation_12_inl.h:
../../nan/nan_persistent_12_inl.h:
../../nan/nan_weak.h:
../../nan/nan_object_wrap.h:
../../nan/nan_private.h:
../../nan/nan_typedarray_contents.h:
../../nan/nan_json.h:
../src/secp256k1-src/include/secp256k1.h:
../src/messages.h:
../src/util.h:
