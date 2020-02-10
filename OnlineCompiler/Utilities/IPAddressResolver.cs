using System;
using System.Net;
using System.Net.Sockets;

namespace OnlineCompiler.Utilities
{
    public interface IIpAddressResolver
    {
        public IPAddress GetLocalAddress();
    }
    
    
    public class IpAddressResolver : IIpAddressResolver
    {
        public IPAddress GetLocalAddress()
        {
            try
            {
                using var socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.IP);
                socket.Connect("8.8.8.8", 65530);
                var endPoint = socket.LocalEndPoint as IPEndPoint;
                return endPoint?.Address ?? throw new NullReferenceException("Could not get local IP address");
            }
            catch (SocketException)
            {
                // no network == no ip, therefore we fallback to loopback
                return IPAddress.Loopback;
            }
        }
    }
}
