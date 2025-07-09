export async function onRequest(context) {
    return new Response(JSON.stringify({
        Code: 200,
        Message: "sub2/key"
    }), {
        status: 200,
    });
}