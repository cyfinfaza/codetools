import asyncio
import websockets
import json
import random
import string

connected = set()

def make_umid():
	return ''.join(random.choice(string.ascii_letters+string.digits) for x in range(6))

async def server(websocket, path):
	connected.add(websocket)
	print("ADD INDIVIDUAL "+str(id(websocket)))
	for conn in connected:
		await conn.send(json.dumps({'type': 'rxGroupUpdate', 'viewers':len(connected)}))
	try:
		print(f'Connected users: {len(connected)}')
		async for message in websocket:
			await conn.send(json.dumps({'type': 'message', 'message':'message'}))
		print("END INDIVIDUAL LOGIC LOOP "+str(id(websocket)))
	finally:
		print("DELETE INDIVIDUAL "+str(id(websocket)))
		connected.remove(websocket)
		print(f'Connected users: {len(connected)}')
		for conn in connected:
			await conn.send(json.dumps({'type': 'rxGroupUpdate', 'viewers':len(connected)}))
try:
	start_server = websockets.serve(server, "0.0.0.0", 6006)
	asyncio.get_event_loop().run_until_complete(start_server)
	asyncio.get_event_loop().run_forever()
except KeyboardInterrupt or SystemExit:
	try:
		# print("Emptying write queue...                          ")
		# # while len(list(writeQueue.queue))>0:
		# # 	print("Remaining: "+str(len(list(writeQueue.queue)))+" ", end="\r")
		# writeQueue.join()
		print("Write queue empty. Exiting.                               ")
	except KeyboardInterrupt or SystemExit:
		print("Exiting regardless.")