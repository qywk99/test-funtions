export async function onRequest(context) {
    return new Response(JSON.stringify({
        Code: 200,
        Message: "key"
    }), {
        status: 200,
    });
}