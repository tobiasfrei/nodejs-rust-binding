#[macro_use]
extern crate neon;

use neon::vm::{Call, JsResult};
use neon::js::JsString;

fn string_callback(call: Call) -> JsResult<JsString> {
    let scope = call.scope;
    let param = call.arguments.require(scope, 0)?.check::<JsString>()?.value();

    Ok(JsString::new(scope, &param).unwrap())
}

fn remove_whitespaces(call: Call) ->  JsResult<JsString> {
    let scope = call.scope;
    let param = call.arguments.require(scope, 0)?.check::<JsString>()?.value();

    let words: Vec<&str> = param.split_whitespace().collect();
    let s: String = words.into_iter().collect();
    Ok(JsString::new(scope, &s).unwrap())
}

register_module!(m, {
    m.export("stringcallback", string_callback)?;
    m.export("remove_whitespaces", remove_whitespaces)?;
    Ok(())
});
