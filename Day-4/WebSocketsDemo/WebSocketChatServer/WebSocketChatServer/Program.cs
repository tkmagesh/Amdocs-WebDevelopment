using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Fleck;

namespace WebSocketChatServer
{
    class Program
    {
        private static List<IWebSocketConnection> connections = new List<IWebSocketConnection>();
        static void Main(string[] args)
        {
            var server = new WebSocketServer("ws://localhost:9090/ChatServer");
            server.Start(con =>
                {
                    con.OnOpen += () =>
                        {
                            Console.WriteLine("A new connection is established");
                            connections.Add(con);
                        };
                    con.OnClose += () =>
                        {
                            Console.WriteLine("An existing connection is destroyed..");
                            connections.Remove(con);
                        };
                    con.OnMessage += s =>
                        {
                            foreach (var connection in connections)
                            {
                                if (con != connection)
                                {
                                    connection.Send(s);
                                }

                            }
                        };
                });
            Console.WriteLine("Server running... Hit ENTER to shutdown");
            Console.ReadLine();
        }
    }
}
