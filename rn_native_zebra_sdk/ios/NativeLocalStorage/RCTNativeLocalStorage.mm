//
//  RCTNativeLocalStorage.m
//  rn_native_zebra_sdk
//
//  Created by shivam srivastava on 09/12/24.
//

#import "RCTNativeLocalStorage.h"

static NSString *const RCNativeLocalStorageKey=@"local-storage";

@interface RCTNativeLocalStorage()
@property (strong,nonatomic) NSUserDefaults *localStorage;
@end

@implementation RCTNativeLocalStorage


RCT_EXPORT_MODULE(NativeLocalStorage)

- (id) init{
  if(self =[super init]){
    NSLog(@"RCTNativeLocalStorage init ");
  _localStorage =[[NSUserDefaults alloc] initWithSuiteName:RCTNativeLocalStorageKey];
    
  }
  return self;
}


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params { 
  NSLog(@"RCTNativeLocalStorage getTurboModule ");

  return std::make_shared<facebook::react::NativeLocalStorageSpecJSI>(params);
}

- (NSString *_Nullable)connectToDevice:(NSString *)deviceId {
    NSLog(@"Connecting to device: %@", deviceId);
    // ... rest of the implementation
    return nil; // Return nil if connection fails
}

- (NSArray<NSString *> *_Nullable)getDeviceList {
    NSLog(@"Fetching device list");
    // ... rest of the implementation
    return @[]; // Return an empty array if no devices are found
}

- (void)listenToRFID:(RCTResponseSenderBlock)onListen {
    NSLog(@"Listening to RFID events");
    // ... rest of the implementation
    onListen(@[]); // Call the callback with an empty array if no events are received
}

- (void)startScan {
    NSLog(@"Starting scan");
    // ... rest of the implementation
}

- (void)stopScan {
    NSLog(@"Stopping scan");
    // ... rest of the implementation
}

@end
